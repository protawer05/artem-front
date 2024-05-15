import React, { useState } from 'react'
import s from './labsPage.module.scss'
const labs = [
	{
		title: 'Лабораторная работа №1',
		fileName: './labs/лабораторная работа №1.pdf',
	},
	{
		title: 'Лабораторная работа №2',
		fileName: './labs/лабораторная работа №2.pdf',
	},
	{
		title: 'Лабораторная работа №3',
		fileName: './labs/лабораторная работа №3.pdf',
	},
	{
		title: 'Лабораторная работа №4',
		fileName: './labs/лабораторная работа №4.pdf',
	},
	{
		title: 'Лабораторная работа №5',
		fileName: './labs/лабораторная работа №5.pdf',
	},
	{
		title: 'Лабораторная работа №6',
		fileName: './labs/лабораторная работа №6.pdf',
	},
	{
		title: 'Лабораторная работа №7',
		fileName: './labs/лабораторная работа №7.pdf',
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
const LabsItem = ({ obj }) => {
	const [isFileOpen, setIsFileOpen] = useState(false)
	return (
		<div className={s.lection_item}>
			<h3 className={s.item_title}>{obj.title}</h3>
			<button className={s.item_file} onClick={() => setIsFileOpen(true)}>
				Открыть файл
			</button>
			{isFileOpen ? (
				<Embed fileName={obj.fileName} setIsFileOpen={setIsFileOpen} />
			) : null}
		</div>
	)
}
const LabsPage = () => {
	return (
		<div className={s.wrapper}>
			{labs.map(obj => {
				return <LabsItem obj={obj} />
			})}
		</div>
	)
}

export default LabsPage
