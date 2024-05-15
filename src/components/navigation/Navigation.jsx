import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import img1 from '../../assets/navImage1.svg'
import s from './navigation.module.scss'
const Navigation = ({ auth, setAuth }) => {
	const group = JSON.parse(localStorage.getItem('group'))
	const onClickExit = () => {
		localStorage.removeItem('fullName')
		localStorage.removeItem('group')
		localStorage.removeItem('password')
		localStorage.removeItem('userName')
		setAuth(false)
	}
	return (
		<>
			{!auth && <Navigate to='/login' replace={true} />}
			<div className={s.wrapper}>
				<div className={s.nav_wrapper}>
					<h1 className={s.logo}>{group}</h1>

					<nav className={s.nav}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? s.nav_item + ' link_active' : s.nav_item
							}
						>
							<img src={img1} alt='lections' />
							<div>Лекции</div>
						</NavLink>
						<NavLink
							to='/labs'
							className={({ isActive }) =>
								isActive ? 'link_active ' + s.nav_item : s.nav_item
							}
						>
							<img src={img1} alt='laboratornyui' />
							<div>Лабораторные работы</div>
						</NavLink>
						<NavLink
							to='/tests'
							className={({ isActive }) =>
								isActive ? 'link_active ' + s.nav_item : s.nav_item
							}
						>
							<img src={img1} alt='tests' />
							<div>Тесты</div>
						</NavLink>
					</nav>
				</div>

				<button className={s.exit_button} onClick={onClickExit}>
					Выйти
				</button>
			</div>
		</>
	)
}

export default Navigation
