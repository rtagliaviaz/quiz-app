import React, {useState, useEffect} from 'react'
import questions from '../questionsService/questions'
import QuestionsComponent from './QuestionsComponent'
import NextQuestion from './NextQuestion'


const QuizComponent = () => {
  const [ques, setQues] = useState([])
  const [points, setPoints] = useState(0)
  const [res, setRes] = useState(0)


  const getQuestions = () => {
    questions().then( question => {
      setQues(question)
    })
  }

  const checkAnswer = (answer, correct) => {
    if (answer[0] === correct) {
     setPoints(points+1)
    } 

    {res < 3 ? setRes(res+1) : setRes(3)}
  }

  const playAgain = () => {
    getQuestions()
    setRes(0)
    setPoints(0)
  }

  useEffect(() => {
    getQuestions()
  }, [])
 

  return (
    <div>
      <div className="head">
        <h4 className="title">Quiz App</h4>
        
      </div>
      
      {ques.length > 0 && res<3 && ques.map(({question, answers, correct, id}) => 
      
        <QuestionsComponent 
          question={question} 
          answers={answers}
          key={id}
          selectedAnswer={answer => checkAnswer(answer, correct)} />
      )}

      {res ===3 ? <NextQuestion points={points} playAgain={playAgain}/>: null}

      {/* {res ===3 ? <h4 className="points">{points} / 3</h4>: null} */}

    </div>
  )
}

export default QuizComponent
