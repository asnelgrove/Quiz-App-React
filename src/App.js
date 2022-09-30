import React, {useState} from "react";
import './App.css';

function App() {
  const questions = [
    {
      questionText: "What is the capital of Canada?",
      answerOptions: [
        {answerText: "Ottawa", isCorrect: true},
        {answerText: "Montreal", isCorrect: false},
        {answerText: "Toronto", isCorrect: false},
        {answerText: "Joe Batt's Arm", isCorrect: false}
      ]
    },
    {
      questionText: "Who sang 'My Heart Will Go On' from the film Titanic (1998)?",
      answerOptions: [
        {answerText: "Mariah Carey", isCorrect: false},
        {answerText: "Elton John", isCorrect: false},
        {answerText: "Celine Dion", isCorrect: true},
        {answerText: "Snoop Dogg", isCorrect: false}
      ]
    },
    {
      questionText: "What is the national bird of New Zealand?",
      answerOptions: [
        {answerText: "emu", isCorrect: false},
        {answerText: "kiwi", isCorrect: true},
        {answerText: "cockatoo", isCorrect: false},
        {answerText: "flamingo", isCorrect: false}
      ]
    },
    {
      questionText: "In Mexico, what are chapulines?",
      answerOptions: [
        {answerText: "chocolate cookies", isCorrect: false},
        {answerText: "small churches", isCorrect: false},
        {answerText: "veggie tacos", isCorrect: false},
        {answerText: "toasted grasshoppers", isCorrect: true}
      ]
    },
    {
      questionText: "Which of the following is a prime number?",
      answerOptions: [
        {answerText: "18", isCorrect: false},
        {answerText: "19", isCorrect: true},
        {answerText: "20", isCorrect: false},
        {answerText: "21", isCorrect: false}
      ]
    },
    {
      questionText: "Which ancient structure remained the tallest on Earth from its completion until 1889?",
      answerOptions: [
        {answerText: "the Great Pyramid of Giza", isCorrect: true},
        {answerText: "the Coliseum", isCorrect: false},
        {answerText: "the Leaning Tower of Pisa", isCorrect: false},
        {answerText: "the Lighthouse of Alexandria", isCorrect: false}
      ]
    },
    {
      questionText: "Which of the following actors has never played James Bond?",
      answerOptions: [
        {answerText: "Pearce Brosnan", isCorrect: false},
        {answerText: "Sean Connery", isCorrect: false},
        {answerText: "Daniel Craig", isCorrect: false},
        {answerText: "George Clooney", isCorrect: true}
      ]
    },
    {
      questionText: "What kind of animal is a bilby?",
      answerOptions: [
        {answerText: "bird", isCorrect: false},
        {answerText: "beetle", isCorrect: false},
        {answerText: "marsupial", isCorrect: true},
        {answerText: "bat", isCorrect: false}
      ]
    },
    {
      questionText: "Which planet is home to the Great Red Spot, a huge cyclonic storm?",
      answerOptions: [
        {answerText: "Jupiter", isCorrect: true},
        {answerText: "Mars", isCorrect: false},
        {answerText: "Saturn", isCorrect: false},
        {answerText: "Venus", isCorrect: false}
      ]
    },
    {
      questionText: "In Brazil, what is a caipirinha?",
      answerOptions: [
        {answerText: "cocktail", isCorrect: true},
        {answerText: "tropical fish", isCorrect: false},
        {answerText: "speed boat", isCorrect: false},
        {answerText: "venomous snake", isCorrect: false}
      ]
    },
    
  ];

  const [qIndex, setQIndex] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  let currentQuestion = questions[qIndex];

  // const initialState = [];

  const [playerResults, setPlayerResults] = useState([]);

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
    console.log(playerResults);
    const nextQuestion = qIndex + 1;
    if (nextQuestion < questions.length) {
      setQIndex(nextQuestion);
    } else {
      setShowScore(true)
    }
    
  };

  const handleReset = () => {
    setShowScore(false);
    setScore(0);
    setQIndex(0);
    playerResults.length = 0;
  };

  return (
    <div className="App">
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
      ) : (
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
      )}
    </div>
  );
}

export default App;
