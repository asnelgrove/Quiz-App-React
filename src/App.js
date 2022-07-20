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

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);
  
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect===true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
    
  };

  const handleReset = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0)
  };

  return (
    <div className="App">
      {showScore ? (
      <div className="card">
        <div className="score-section">
          You scored {score} out of {questions.length}<br></br>
          <button onClick={handleReset}>Try Quiz Again</button>
        </div>
      </div>
      ) : (
      <>
      <div className="card">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> of {questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
        </div> 

        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => 
          <button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
        </div>
      </div>
      </>
      )}
    </div>
  );
}

export default App;
