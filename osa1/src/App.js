import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header></Header>
      <Button text = "good" handleClick={ ()=> setGood(good + 1)} ></Button>
      <Button text = "neutral" handleClick={ ()=> setNeutral(neutral + 1)} ></Button>
      <Button text = "bad" handleClick={ ()=> setBad(bad + 1)} ></Button>
      <Statistics good={good} neutral = {neutral} bad = {bad} ></Statistics>
    </div>
  )
}

const Header = () => {
  return (
  <h1> give feedback</h1>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive  = good / all * 100
return (
  <div>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p> all {all}</p>
    <p>average = {average}</p>
    <p>positive = {positive}%</p>
  </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick }>
    {props.text}
  </button>
)
export default App

/*
Teht 1.5

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header text = {course.name}/>
      <Content parts = {course.parts} />
      <Total  parts = {course.parts}/>
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return <h1>{props.text}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part text = {props.parts[0].name} count={props.parts[0].exercises}></Part>
      <Part text = {props.parts[1].name} count={props.parts[1].exercises}></Part>
      <Part text = {props.parts[2].name} count={props.parts[2].exercises}></Part> 
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.text} {props.count}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

export default App*/