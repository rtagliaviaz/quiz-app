import React,{useState} from 'react'

const QuestionsComponent = ({question, answers, selectedAnswer}) => {
  const [answer, setAnswer] = useState(answers)
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button key={index} 
        className="answerBtn"
        onClick={() => {
          setAnswer([text]);
          selectedAnswer([text]);
        }}
        >
          {text}
        </button>
      ))}
      
    </div>
  )
}

export default QuestionsComponent
