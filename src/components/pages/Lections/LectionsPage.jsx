import axios from 'axios'
import React, { useState } from 'react'
import s from './lectionPage.module.scss'
const lections = [
	{
		title: 'Economics',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti.',
		fileName: 'time-managment.pdf',
	},
	{
		title: 'Math',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti.',
		fileName: 'time-managment.pdf',
	},
	{
		title: 'Physic',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, possimus?',
		fileName: 'time-managment.pdf',
	},
	{
		title: 'Algebra',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nobis mollitia rerum laborum ipsum, aliquam dolor facilis esse optio quibusdam tenetur maxime maiores quas dolore quam harum odit eius earum?',
		fileName: 'time-managment.pdf',
	},
	{
		title: 'Ecologia',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti.',
		fileName: 'time-managment.pdf',
	},
	{
		title: 'Aboba',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti.',
		fileName: 'time-managment.pdf',
	},
]
const Embed = ({ fileName, setIsFileOpen }) => {
	return (
		<div className={s.modal_file_wrapper}>
			<div className={s.file_wrapper}>
				<embed
					src={fileName}
					className={s.file}
					type='application/pdf'
					width='80%'
					height='80%'
				></embed>
				<button className={s.file_close} onClick={() => setIsFileOpen(false)}>
					X
				</button>
			</div>
		</div>
	)
}
const LectionItem = ({ obj }) => {
	const [isFileOpen, setIsFileOpen] = useState(false)
	return (
		<div className={s.lection_item}>
			<h3 className={s.item_title}>{obj.title}</h3>
			<p className={s.item_desc}>{obj.desc}</p>
			<button className={s.item_file} onClick={() => setIsFileOpen(true)}>
				Открыть файл
			</button>
			{isFileOpen ? (
				<Embed fileName={obj.fileName} setIsFileOpen={setIsFileOpen} />
			) : null}
		</div>
	)
}
const LectionsPage = () => {
	return (
		<div className={s.wrapper}>
			{lections.map(obj => {
				return <LectionItem obj={obj} />
			})}
		</div>
	)
}

export default LectionsPage

const LectionsPageOld = () => {
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
			{/* <button onClick={() => setIsModalOpen(true)}>Добавить лекцию</button> */}
			{/* */}
		</>
	)
}
