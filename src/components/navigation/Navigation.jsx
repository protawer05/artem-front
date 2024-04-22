import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import img1 from '../../assets/navImage1.svg'
import s from './navigation.module.scss'
const Navigation = ({ auth, setAuth }) => {
	const group = JSON.parse(localStorage.getItem('group'))
	const onClickExit = () => {
		setAuth(false)
		localStorage.removeItem('userName')
		localStorage.removeItem('password')
	}
	return (
		<>
			{!auth && <Navigate to='/login' replace={true} />}
			<div className={s.wrapper}>
				<div className={s.logo_wrapper} onClick={() => onClickExit()}>
					<button className={s.logout}>Выйти</button>
					<h1 className={s.logo}>{group}</h1>
				</div>

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
						<div>Лабараторные работы</div>
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
		</>
	)
}

export default Navigation
