import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import s from './registerPage.module.scss'
const RegisterPage = ({ auth, setAuth }) => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [fullName, setFullName] = useState('')
	const [group, setGroup] = useState('')
	const fetchLogin = async () => {
		const userName = JSON.parse(localStorage.getItem('userName'))
		const password = JSON.parse(localStorage.getItem('password'))
		try {
			const response = await axios.post('http://localhost:4444/login', {
				userName,
				password,
			})
			if (response.status === 200) {
				setAuth(true)
			} else {
				setAuth(false)
			}
		} catch (err) {}
	}
	useEffect(() => {
		fetchLogin()
	}, [])

	const handleSubmit = async () => {
		const response = await axios.post('http://localhost:4444/register', {
			userName,
			password,
			fullName,
			group,
		})
		if (response.status === 200) {
			console.log(response)
			localStorage.setItem('userName', JSON.stringify(response.data.userName))
			localStorage.setItem('password', JSON.stringify(response.data.password))
			localStorage.setItem('fullName', JSON.stringify(response.data.fullName))
			localStorage.setItem('group', JSON.stringify(response.data.group))
			setAuth(true)
		}
	}
	return (
		<>
			{auth && <Navigate to={'/'} replace={true} />}
			<div className={s.wrapper}>
				<div className={s.content__wrapper}>
					<form>
						<label>Регистрация</label>
						<div className={s.inputs__container_register}>
							<input
								type='text'
								placeholder='Имя Фамилия'
								onChange={e => setFullName(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Логин'
								onChange={e => setUserName(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Пароль'
								onChange={e => setPassword(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Группа'
								onChange={e => setGroup(e.target.value)}
							/>
						</div>
						<div className={s.register_button__container}>
							<button
								type='submit'
								className={s.register_button}
								onClick={() => handleSubmit()}
							>
								Зарегестрироваться
							</button>
							<Link to='/login'>Уже есть аккаунт? Войдите</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default RegisterPage
