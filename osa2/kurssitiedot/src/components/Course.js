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
  return (
  <div>
    {parts.map(part => <Part part = {part}></Part>)}
  </div>
  )
} 

const Part = ({part}) => {

  return <p>{part.name} {part.exercises}</p>
}

export default Course