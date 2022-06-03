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

export default App