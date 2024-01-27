// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';

function App() {

  const [score, setScore] = useState(0)
  
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)
  
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const questions = [
    {

      questionText: 'What is the capital of Texas?',
      answerOptions: [
        {answerText: 'Dallas', isCorrect: false},
        {answerText: 'Austin', isCorrect: true},
        {answerText: 'Houston', isCorrect: false},
        {answerText: 'San Antonio', isCorrect: false}
      ],

    },
    {
    questionText: 'Who is the main character of the first Terminator movie?',
    answerOptions: [ 
      {answerText: 'Terminator', isCorrect: false},
      {answerText: 'John Connor', isCorrect: false},
      {answerText: 'Sarah Connor', isCorrect: true},
      {answerText: 'Kyle Reese', isCorrect: false},

  ]
},
    {
    questionText: 'In Resident Evil 4 Ashley Graham is the daughter of who?',
    answerOptions: [ 
      {answerText: 'The President', isCorrect: true},
      {answerText: 'Mendez', isCorrect: false},
      {answerText: 'Leon', isCorrect: false},
      {answerText: 'The Terminator', isCorrect: false},

  ]
},
    {
    questionText: 'In the book "The Outsiders" by Stephen King, what is the name of the first man accused of the crime commited?',
    answerOptions: [ 
      {answerText: 'Terry Maitland', isCorrect: true},
      {answerText: 'Aubrey Graham', isCorrect: false},
      {answerText: 'Alec Pelley', isCorrect: false},
      {answerText: 'Ralph Anderson', isCorrect: false},

  ]
},


  ]
  return (
    <div className="app">
      {/* HINT: replace the "false" with logic to replace the score when user has answered all questions */}
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
            <>

            <div className='question-section'>
              <div className='question-count'></div>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
              <div className='question-text'> {questions[currentQuestion].questionText}
              </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} >{answerOption.answerText}</button>
              ))}
            </div>
            </div>

            </>
//EMPTY COMMENT
      )

      }
      <header className="App-header">
        <p>

          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;