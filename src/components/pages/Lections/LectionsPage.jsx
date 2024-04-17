import axios from 'axios'
import React, { useState } from 'react'
import s from './lectionPage.module.scss'
const LectionsPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [file, setFile] = useState()
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const handleSubmit = async () => {
		console.log(file)
		const formData = new FormData()
		formData.append('text', file)
		await axios.post('http://localhost:4444/upload', formData)
	}
	return (
		<>
			{isModalOpen && (
				<div className={s.modal_wrapper}>
					<div className={s.modal}>
						<button
							className={s.close_modal}
							onClick={() => setIsModalOpen(false)}
						>
							X
						</button>
						<div className={s.input_wrapper}>
							<div className={s.title}>Название лекции</div>
							<input type='text' onChange={e => setTitle(e.target.value)} />
						</div>
						<div className={s.input_wrapper}>
							<div className={s.title}>Описании лекции</div>
							<input type='text' onChange={e => setDesc(e.target.value)} />
						</div>
						<div className={s.input_wrapper}>
							<div className={s.title}>txt файл лекции</div>
							<input type='file' onChange={e => setFile(e.target.files[0])} />
							<button onClick={handleSubmit}>Отправить</button>
						</div>
					</div>
				</div>
			)}
			<div>
				<button onClick={() => setIsModalOpen(true)}>Добавить лекцию</button>
			</div>
		</>
	)
}

export default LectionsPage
