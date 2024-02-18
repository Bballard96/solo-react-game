import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';



/* PSUEDO CODE */

/* Rendering Questions and Answers */ 
       // add jsx questions[0].questionText to questiontext div to show each question  //
			// add map method for answers to show up properly //



/* Changing questions using state */ 

			// add state varible for question and current question //
			// swap jsx to implement state for question text //
			// add handle button  click function to increment question state by one if the next question isn't greater than the total ammount of questions

/* Showing the score screen */ 



/* Saving the score */


/* Showing the score */


export default function App() {
	
	
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState(0)
	const [showScore, setShowScore] = useState(false)

	const handleAnswerButtonClick = (answerOption) => {
		// make new variable to increment current question by 1
		const nextQuestion = currentQuestion + 1;
		// make if statement to check if the next question is less than the total ammount of questions
		if (nextQuestion < questions.length ) {
		// if the next question is less than total # of questions, setcurrent question state to currentquestion + 1 (nextQuestion) 
		setCurrentQuestion(nextQuestion)
		// if the next question is higher than the total ammount of questions (last question of the quiz), alert player that the game is over
		} else {
			setShowScore(true)
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1{}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentAnswer].answerOptions.map((answerOption, index) => (

              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

            ) )}
						{/* <button>Answer 2</button>
						<button>Answer 3</button>
						remove 
						<button>Answer 4</button> */}
					</div>
				</>
			)}
		</div>
	);
}