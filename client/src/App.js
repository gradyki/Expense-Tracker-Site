import { useEffect, useState } from 'react'
import {  Route } from 'react-router-dom'
import { baseURL, config } from './services'
import axios from 'axios'
import Footer from './components/Footer'
import Form from './components/Form'
import Nav from './components/Nav'



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
  

  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <main>
          <h2>Approved Expenses</h2>
          {expenses.map((expense) => (
            <p key={expense.id}>
              {expense.fields.name}
              {expense.fields.date} 
              {expense.fields.notes} 
              {expense.fields.amount}
              {expense.fields.status}
            </p>
          ))}
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
