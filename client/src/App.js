import { useEffect, useState } from 'react'
import {  Route } from 'react-router-dom'
import { baseURL, config } from './services'
import axios from 'axios'
import Footer from './components/Footer'
import Form from './components/Form'
import Nav from './components/Nav'
import Table from './components/Table'
import "./App.css";




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

  
  


  let expensesToSort = []
  for (let i = 0; i < expenses.length; i++) {
    expensesToSort.push(expenses[i])
    
    
  }

 
  

  const sortName = () => {
    expensesToSort.sort((a, b) => {
      if (a.fields.name.toLowerCase() < b.fields.name.toLowerCase()) {
        return -1
      } else if (a.fields.name.toLowerCase() > b.fields.name.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })

    setExpenses(expensesToSort)
    

  }

  const sortDate = () => {
    expensesToSort.sort((a, b) => {
      return (a.fields.date.localeCompare(b.fields.date))
    })
    setExpenses(expensesToSort)
  }

  const sortNote = () => {
    expensesToSort.sort((a, b) => {
      if (a.fields.notes.toLowerCase() < b.fields.notes.toLowerCase()) {
        return -1
      } else if (a.fields.notes.toLowerCase() > b.fields.notes.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })

    setExpenses(expensesToSort)
    

  }

  const sortAmount = () => {
    expensesToSort.sort((a, b)=> {
      return (a.fields.amount - b.fields.amount);
    })
    setExpenses(expensesToSort)
  }

  const sortStatus = () => {
    expensesToSort.sort((a, b) => {
      if (a.fields.status.toLowerCase() < b.fields.status.toLowerCase()) {
        return -1
      } else if (a.fields.status.toLowerCase() > b.fields.status.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })

    setExpenses(expensesToSort)
    
  }



  return (
    <div className="App">
      <Nav />
      <Route exact path='/table'>
        <main>
          <h2 id='table-title'>Expenses</h2>
          <Table expenses={expenses} sortName={sortName} sortDate={sortDate} sortNote={sortNote} sortAmount={sortAmount} sortStatus={sortStatus}/>
        </main>
      </Route>
      <Route exact path='/'>
        <Form setToggleFetch={setToggleFetch}/>
      </Route>
        <Footer />
    </div>
  );
}

export default App;