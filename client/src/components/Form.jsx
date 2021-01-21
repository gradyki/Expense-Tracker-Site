import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services'


function Form(props) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState(0.00)
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
    console.log("Form working")
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
    </form>
  )
}

export default Form;