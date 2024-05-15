import React, { useState } from 'react'
import s from './testPage.module.scss'
const questions = [
	{
		question: 'Что такое CPU (Central Processing Unit)?',
		answers: [
			'Это центральный процессор, отвечающий за выполнение программ в ЭВМ и обеспечивающий управление периферийными устройствами.',
			'Это специализированный процессор, ускоряющий выполнение определенных задач в ЭВМ и являющийся не обязательным элементом',
			'Это процессорный элемент, используемый исключительно в компактных компьютерах',
			'Это чипсет, связывающий составные части компьютера',
		],
		answerTrue: 0,
	},
	{
		question: 'Основное назначение сканера?',
		answers: [
			'Вывод информации на внешний носитель (бумагу)',
			'Ввод информации в ЭВМ в графическом виде',
			'Ввод информации в ЭВМ в текстовом виде',
			'Вывод информации на флеш-накопитель',
		],
		answerTrue: 1,
	},
	{
		question: 'Основное назначение принтера?',
		answers: [
			'Вывод информации на внешний носитель (бумагу)',
			'Ввод информации в ЭВМ в графическом виде',
			'Ввод информации в ЭВМ в текстовом виде',
			'Вывод информации на флеш-накопитель',
		],
		answerTrue: 0,
	},
	{
		question: 'Что входит в стоимость ЭВМ? (выберите два варианта ответа)',
		answers: [
			'Стоимость аппаратного обеспечения',
			'Стоимость программного обеспечения',
			'Стоимость организации рабочего места пользователя',
			'Быстродействие ЭВМ',
			'Объем оперативной памяти',
		],
		answerTrue: 1,
	},
]
const renderQuestion = (obj, onClickCheckbox, countQuestion, answerCount) => {
	return (
		<>
			<h2>
				Вопрос №{countQuestion + 1} {obj.question}
			</h2>
			{obj.answers.map((answer, i) => {
				return (
					<div className={s.answer_wrapper}>
						<input
							type='radio'
							name={obj.question}
							value={i}
							onClick={e => onClickCheckbox(i)}
							checked={i === answerCount}
						/>
						<div>{answer}</div>
					</div>
				)
			})}
		</>
	)
}
const TestsPage = () => {
	const [countCorrectAnswer, setCountCorrectAnswer] = useState(0)
	const [countQuestion, setCountQuestion] = useState(0)
	const [showFinal, setShowFinal] = useState(false)
	const [answerCount, setAnswerCount] = useState(null)
	const onClickCheckbox = i => {
		setAnswerCount(i)
	}
	const returnQuestionCorrect = count => {
		if (count === 1) {
			return 'вопрос'
		} else if (count === 2 || count === 3 || count === 4) {
			return 'вопроса'
		} else {
			return 'вопросов'
		}
	}
	const onClickNextQuestion = () => {
		if (countQuestion + 1 >= questions.length) {
			setShowFinal(true)
		} else {
			setCountQuestion(countQuestion => countQuestion + 1)
		}
		if (answerCount === questions[countQuestion].answerTrue) {
			setCountCorrectAnswer(prev => prev + 1)
		}
		setAnswerCount(null)
	}
	return (
		<div className={s.wrapper}>
			{showFinal ? (
				<h1>
					Вы ответили правильно на {countCorrectAnswer}{' '}
					{returnQuestionCorrect(countCorrectAnswer)} из {countQuestion + 1}
				</h1>
			) : (
				renderQuestion(
					questions[countQuestion],
					onClickCheckbox,
					countQuestion,
					answerCount
				)
			)}

			{!showFinal && (
				<button
					className={s.next_question}
					onClick={() => onClickNextQuestion()}
				>
					Следующий вопрос
				</button>
			)}
		</div>
	)
}

export default TestsPage
