import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [notificationValue, setNotificationValue] = useState('')
  const [notificationType, setNotificationType] = useState('')

  const  notificationStates = {
    success : 'success',
    error : 'error'
}

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
    const personName = persons.find( person => person.id === id).name
    if (window.confirm(`delete ${personName}?`)){
      personService
        .delete(id)
        .then(deleted => {
          setPersons(persons.filter(n => n.id !== id))
          setNotificationType(notificationStates.success)
          setNotificationValue(`Deleted ${personName}`)
          setTimeout(() => {
            setNotificationValue(null)
          }, 5000)
          })
        .catch(error => {
          setNotificationType(notificationStates.error)
          setNotificationValue(`information of ${personName} has already been removed from server.`)
          setTimeout(() => {
            setNotificationValue(null)
          }, 5000)
          setPersons(persons.filter( person => person.id !== id))
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
            setNotificationType(notificationStates.success)
            setNotificationValue(`Modified ${returnedPerson.name}s phone number`)
            setTimeout(() => {
              setNotificationValue(null)
            }, 5000)
          })
      }
    }
    else{

      const personObj = {
        name: newName,
        number: newNumber
      }
      personService.create(personObj)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNotificationType(notificationStates.success)
          setNotificationValue(`Added ${newPerson.name}`)
          setTimeout(() => {
            setNotificationValue(null)
          }, 5000)
      
      })
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()) )
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationValue} type= {notificationType}></Notification>
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