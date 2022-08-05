const Course = ({course}) => {
    
console.log("coursen propsit", course)
    return (
      <div>
        <Header name = {course.name}></Header>
        <Content parts = {course.parts}></Content>
      </div>
    )
  }
  
const Header =({name}) => {
  console.log("Header toimii", name)
  return <h1>{name}</h1>
} 

const Content =({parts}) => {
  console.log("Content toimii")
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
  <div>
    {parts.map(part => <Part key={part.id} part = {part}></Part>)}
    <b>total of {total} exercises</b>
  </div>
  )
} 

const Part = ({part}) => {

  return <p>{part.name} {part.exercises}</p>
}

export default Course