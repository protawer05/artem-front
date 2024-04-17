import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import s from './loginPage.module.scss'

const LoginPage = ({ auth, setAuth }) => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
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
		const response = await axios.post('http://localhost:4444/login', {
			userName,
			password,
		})
		if (response.status === 200) {
			console.log(response)
			localStorage.setItem('userName', JSON.stringify(response.data.userName))
			localStorage.setItem('password', JSON.stringify(response.data.password))
			localStorage.setItem('fullName', JSON.stringify(response.data.fullName))
			setAuth(true)
		}
	}
	return (
		<>
			{auth && <Navigate to={'/'} replace={true} />}
			<div className={s.wrapper}>
				<div className={s.content__wrapper}>
					<form>
						<label>Login</label>
						<div className={s.inputs__container_login}>
							<input
								type='text'
								placeholder='Username'
								onChange={e => setUserName(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Password'
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							type='submit'
							className={s.login_button}
							onClick={handleSubmit}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default LoginPage
