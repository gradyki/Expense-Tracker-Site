import { useEffect, useState } from 'react'
import {  Route } from 'react-router-dom'
import { baseURL, config } from './services'
import axios from 'axios'
import Footer from './components/Footer'
import Form from './components/Form'
import Nav from './components/Nav'
import Table from './components/Table'




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

  const sortName = () => {
    console.log('sort name')
  }

  const sortDate = () => {
    console.log('sort date')
  }

  const sortNote = () => {
    console.log('sort note')
  }

  const sortAmount = () => {
    console.log('sort amount')
  }

  const sortStatus = () => {
    console.log('sort status')
  }



  return (
    <div className="App">
      <Nav />
      <Route exact path='/table'>
        <main>
          <h2>Approved Expenses</h2>
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
