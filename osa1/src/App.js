const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text = {course}/>
      <Content text1 = {part1}
               text2 = {part2}
               text3 = {part3}
               count1 ={exercises1}
               count2 ={exercises2} 
               count3 ={exercises3} />
      <Total count = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
const Header = (props) => {
return (
  <h1>{props.text}</h1>
)
}

const Content = (props) => {
  return (
    <div>
      <Part text = {props.text1} count={props.count1}></Part>
      <Part text = {props.text2} count={props.count2}></Part>
      <Part text = {props.text3} count={props.count3}></Part> 
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
    <p>Number of exercises {props.count}</p>
  )
}

export default App