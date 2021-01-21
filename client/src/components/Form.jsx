import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services'


function Form(props) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      name,
      date,
      amount,
      notes,
      status,
    }
    await axios.post(baseURL, { fields }, config)
    props.setToggleFetch((prev)=> !prev)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter a new expense</h3>
      <label htmlFor='name'>Name:</label>
      <input
        name='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='name'>Date:</label>
      <input
        name='date'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor='name'>Amount:</label>
      <input
        name='amount'
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor='name'>Notes:</label>
      <input
        name='notes'
        type='text'
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label htmlFor='status'>Status:</label>
      <select onChange={(e)=> setStatus(e.target.value)}>
        <option value={status}>Submitted</option>
        <option value={status}>Need to Submit</option>
      </select>
      <button type="submit">Submit</button>
        
    </form>
  )
}

export default Form;