import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'

import dayjs from 'dayjs'
import { useState } from 'react'
import './App.css'
import Navigation from './navigation/Navigation'
import LabsPage from './pages/Labs/LabsPage'
import LectionsPage from './pages/Lections/LectionsPage'
import LoginPage from './pages/Login/LoginPage'
import TestsPage from './pages/Tests/TestsPage'
export const HomeLayout = ({ auth }) => {
	const fullName = JSON.parse(localStorage.getItem('fullName'))
	const date = dayjs().format('DD/MM/YYYY')
	return (
		<div className='App'>
			<Navigation auth={auth} />
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
				<Route element={<HomeLayout auth={auth} />}>
					<Route path='/' element={<LectionsPage />} />
					<Route path='/labs' element={<LabsPage />} />
					<Route path='/tests' element={<TestsPage />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
