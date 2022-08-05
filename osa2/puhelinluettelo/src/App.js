import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '213123',
      id: 0
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange =  (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameChange =  (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const AddNewName = (event) => {
    event.preventDefault()
    console.log(newName)

    if (persons.find(person => person.name === newName))
    {
      alert(`${newName} is already added to phonebook`)
    }
    else{

      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      
      <form  onSubmit={AddNewName}>
        <div> 
          name: <input value= {newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value= {newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
         {persons.map(person =>
           <Person key={person.id} name={person.name} number = {person.number}></Person>
        )} 
      </ul>
    </div>
  )

}

export default App