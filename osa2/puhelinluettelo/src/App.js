import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const hook = () => {
    console.log('getting data')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])
  console.log( 'render', persons.length, 'notes')

  const handleNumberChange =  (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameChange =  (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  const handleDeleteOf = (id) => {
    if (window.confirm(`delete ${persons.find( person => person.id === id).name}?`)){
      personService.delete(id)
        .then(deleted => {
          setPersons(persons.filter(n => n.id !== id))
          })
    }
  }

  const AddNewName = (event) => {
    event.preventDefault()
    console.log(newName)
    const existstingPerson = persons.find(person => person.name === newName)

    if (existstingPerson)
    {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old nuumber with new one?`)){
        const personObj= {...existstingPerson, number: newNumber}
        personService.update(existstingPerson.id, personObj)
          .then( returnedPerson => {
            setPersons(persons.map( person => person.id !== existstingPerson.id ? person: returnedPerson))
          })
      }
    }
    else{

      const personObj = {
        name: newName,
        number: newNumber
      }
      personService.create(personObj)
        .then(newPerson =>
          setPersons(persons.concat(newPerson))
        )
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
           <Person 
            key={person.id}
            name={person.name}
            number = {person.number}
            handleDelete = {() => handleDeleteOf(person.id)}></Person>
        )} 
      </ul>
    </div>
  )

}

export default App