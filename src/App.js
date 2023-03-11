import React, {useEffect, useState} from "react";
import './App.css';
import  QuestionDB from './questiondb.js'
import Quiz from "./Quiz";

const App = () => {
    const [questionSet, setQuestionSet] = useState([]);
    const [startQuiz, setStartquiz] = useState(false);
    const [shuffle, setShuffle] = useState(false)

    useEffect(() => {
        setQuestionSet(QuestionDB.sort(() => 0.5 - Math.random()).slice(0, 10));
        console.log(questionSet);
    }, [shuffle])

  return (
    <div className="bground">
        <div className="quiz-title">
          <h1>Quiz App</h1>
        </div>
        
        <div className="card" style={{display: startQuiz ? "none" : "block"}}>
          <h2>Welcome to Quiz App!</h2>
          <p>Test your knowledge of general trivia. How many questions can you answer? They're not easy!</p>
          <p>Click the button to start the quiz</p>
          <button disabled={questionSet ? false : true} onClick={() => setStartquiz(true)}>Start Quiz</button>
        </div>
        
        {startQuiz && <Quiz questionSet={questionSet} shuffle={shuffle} setShuffle={setShuffle} setStartquiz={setStartquiz}/>}
    </div>
  )
}

export default App