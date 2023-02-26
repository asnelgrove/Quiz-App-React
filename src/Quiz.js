import React, {useState} from 'react'
import './App.css'

const Quiz = (props) => {

    let questions = props.questionSet;
    
     // variables needed for the game

     const [qIndex, setQIndex] = useState(0);

     const [showScore, setShowScore] = useState(false);
   
     const [score, setScore] = useState(0);
   
     const [playerResults, setPlayerResults] = useState([]);
   
     let currentQuestion = questions[qIndex];
   
      // functions to make the game work, keep track of answers and player score
   
      const addPlayerResults = obj => {
       setPlayerResults(current => [...current, obj])
     };
     
     const handleAnswerButtonClick = (currentQuestion, answerOption) => {
       if (answerOption.isCorrect===true) {
         setScore(score + 1);
         addPlayerResults(
         {text: currentQuestion.questionText, 
         yourAnswer: answerOption.answerText,
         emoji: '\u{2705}'},
         )
       } else {
         addPlayerResults(
           {text: currentQuestion.questionText, 
           yourAnswer: answerOption.answerText,
           emoji: '\u{274C}'},
         )
       }
   
       const nextQuestion = qIndex + 1;
   
       if (nextQuestion < questions.length) {
         setQIndex(nextQuestion);
       } else {
         setShowScore(true)
       }
       
     };
   
     // to try the quiz again (same question set)
   
     const handleReset = () => {
       setShowScore(false);
       setScore(0);
       setQIndex(0);
       playerResults.length = 0;
     };
     
  return (
    <div>
         {showScore ? (
        
        <div className="card">
          <div className="score-section">
            <p>You scored {score} out of {questions.length}</p><br></br>
            {score===10 ? (<p><span>&#x1F38A;</span> Perfect Score! <span>&#x1F3C6;</span><span>&#x1F38A;</span></p>) : <></>}
            <h1>Your Results:</h1> 
            {playerResults.map((result) =>
            <div className="result">
            <p>{result.text}</p>
            <p>{result.yourAnswer} <span>{result.emoji}</span></p>
            </div>
            )}
            <button onClick={handleReset}>Try Quiz Again</button>
          </div>
        </div>
        ) : questions ? (
        <>
        <div className="card">
          <div className="question-section">
            <div className="question-count">
              <span>Question {qIndex + 1}</span> of {questions.length}
            </div>
            <div className="question-text">{currentQuestion.questionText}</div>
          </div> 
  
          <div className="answer-section">
            {currentQuestion.answerOptions.map((answerOption) => 
            <button onClick={()=>handleAnswerButtonClick(currentQuestion, answerOption)}>{answerOption.answerText}</button>)}
          </div>
        </div>
        </>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Quiz