import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'

import dayjs from 'dayjs'
import { useState } from 'react'
import './App.css'
import Navigation from './navigation/Navigation'
import LabsPage from './pages/Labs/LabsPage'
import LectionsPage from './pages/Lections/LectionsPage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import TestsPage from './pages/Tests/TestsPage'
export const HomeLayout = ({ auth, setAuth }) => {
	const fullName = JSON.parse(localStorage.getItem('fullName'))
	const date = dayjs().format('DD/MM/YYYY')
	return (
		<div className='App'>
			<Navigation auth={auth} setAuth={setAuth} />
			<main>
				<header>
					<h2>Приветствую {fullName}</h2>
					<div className=''>Сегодня {date}</div>
				</header>
				<Outlet />
			</main>
		</div>
	)
}
function App() {
	const [auth, setAuth] = useState(false)
	return (
		<HashRouter>
			<Routes>
				<Route
					index
					path='/login'
					element={<LoginPage auth={auth} setAuth={setAuth} />}
				/>
				<Route
					index
					path='/register'
					element={<RegisterPage auth={auth} setAuth={setAuth} />}
				/>
				<Route element={<HomeLayout auth={auth} setAuth={setAuth} />}>
					<Route path='/' element={<LectionsPage />} />
					<Route path='/labs' element={<LabsPage />} />
					<Route path='/tests' element={<TestsPage />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
