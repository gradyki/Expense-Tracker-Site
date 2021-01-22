import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services'


function Form(props) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('Submitted')
  
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
      <label htmlFor='date'>Date:</label>
      <input
        name='date'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor='amount'>Amount:</label>
      <input
        name='amount'
        type='number'
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <label htmlFor='notes'>Notes:</label>
      <input
        name='notes'
        type='text'
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label htmlFor='status'>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        
        <option value={'Submitted'}>Submitted</option>
        <option value={'Need to submit'}>Need to Submit</option>
      </select>
      <button type="submit">Submit</button>
        
    </form>
  )
}

export default Form;