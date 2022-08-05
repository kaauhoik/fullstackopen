import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '213123',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const handleNumberChange =  (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameChange =  (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleFilterChange =  (event) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
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

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()) )
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue = {filterValue} handleFilterChange = {handleFilterChange}></Filter>
      <h2>Add a new person</h2>
      <PersonForm handleNumberChange = {handleNumberChange}
                  handleNameChange = {handleNameChange}
                  AddNewName = {AddNewName}
                  newName = {newName}
                  newNumber = {newNumber}
                  >
                  
      </PersonForm>
      <h2>Numbers</h2>
      <ul>
         {filteredPersons.map(person =>
           <Person key={person.id} name={person.name} number = {person.number}></Person>
        )} 
      </ul>
    </div>
  )

}

export default App