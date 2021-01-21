import { useEffect, useState } from 'react'
import {  Route } from 'react-router-dom'
import { baseURL, config } from './services'
import axios from 'axios'

import Footer from './components/Footer'
import Form from './components/Form'
import Nav from './components/Nav'
import * as BootStrap from 'react-bootstrap'



function App() {
  const [expenses, setExpenses] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  
  useEffect(() => {
    const getExpenses = async () => {
      const resp = await axios.get(baseURL, config)
      setExpenses(resp.data.records)
    }
    getExpenses()
  }, [toggleFetch])


  const createTable = (expense, index) => {
    return (
      <tr key={expense.id}>
              <td>{expense.fields.name}</td>
              <td>{expense.fields.date}</td>
              <td>{expense.fields.notes}</td>
              <td>{expense.fields.amount}</td>
              <td>{expense.fields.status}</td>
            </tr>
    )
  }

  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <main>
          <h2>Approved Expenses</h2>
          <BootStrap.Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Date</th>
      <th>Notes</th>
                <th>Amount</th>
                <th>Status</th>
    </tr>
  </thead>
            <tbody>
          {expenses.map(createTable)}
  </tbody>
</BootStrap.Table>
        </main>
      </Route>
      <Route path='/new'>
        <Form setToggleFetch={setToggleFetch}/>
      </Route>
        <Footer />
    </div>
  );
}

export default App;
