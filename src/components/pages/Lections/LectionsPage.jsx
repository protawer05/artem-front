import React, { useState } from 'react'
import s from './lectionPage.module.scss'
const lections = [
	{
		title: '01_понятие аппаратных средств и архитектура',
		fileName: './lections/01_понятие аппаратных средств и архитектура.pdf',
	},
	{
		title: '01_Понятие аппаратных средств эвм и архитектуры',
		fileName: './lections/01_ponyatie_apparatnyh_sredstv_evm_i_arhitektury.pdf',
	},
	{
		title: '02_Архитектура и топологии вычислительных систем',
		fileName: './lections/02_Архитектура и топологии вычислительных систем.pdf',
	},
	{
		title: '03_история ВТ (все поколения)',
		fileName: './lections/03_история ВТ (все поколения).pdf',
	},
	{
		title: '03_история развития ВТ',
		fileName: './lections/03_история развития ВТ.pdf',
	},
	{
		title: '03_нулевое_поколение_ВТ',
		fileName: './lections/03_нулевое_поколение_ВТ.pdf',
	},
	{
		title: '04_классификация ЭВМ',
		fileName: './lections/04_классификация ЭВМ.pdf',
	},
	{
		title: '05_основные характеристики ЭВМ',
		fileName: './lections/05_основные характеристики ЭВМ.pdf',
	},
	{
		title: '06_1_основные элементы ЭВМ',
		fileName: './lections/06_1_основные элементы ЭВМ.pdf',
	},
	{
		title: '06_2_Узлы ЭВМ',
		fileName: './lections/06_2_Узлы ЭВМ.pdf',
	},
	{
		title: '06_3_как производятся процессоры',
		fileName: './lections/06_3_как производятся процессоры.pdf',
	},
	{
		title: '06_основные элементы ЭВМ',
		fileName: './lections/06_основные элементы ЭВМ.pdf',
	},
	{
		title: '07_01_принципы построения ЭВМ',
		fileName: './lections/07_01_принципы построения ЭВМ.pdf',
	},
	{
		title: '07_02_оперативная память',
		fileName: './lections/07_02_оперативная память.pdf',
	},
	{
		title: '07_03_кеш-память',
		fileName: './lections/07_03_кеш-память.pdf',
	},
	{
		title: '07_04_hdd',
		fileName: './lections/07_04_hdd.pdf',
	},
	{
		title: '07_05_ssd',
		fileName: './lections/07_05_ssd.pdf',
	},
	{
		title: '07_07_иерархия шин',
		fileName: './lections/07_07_иерархия шин.pdf',
	},
	{
		title: '08_технологии повышения производительности процессоров',
		fileName:
			'./lections/08_технологии повышения производительности процессоров.pdf',
	},
	{
		title: '09_Оценка производительности вычислительных систем и ПК',
		fileName:
			'./lections/09_Оценка производительности вычислительных систем и ПК.pdf',
	},
	{
		title: '10_01_периферийные устройства',
		fileName: './lections/10_01_периферийные устройства.pdf',
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
