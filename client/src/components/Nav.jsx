import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <h2>Expense Tracker</h2>
      <div className='links'>
    <Link to='/'>Home</Link>
        <Link to='/table'>Expenses</Link>
        </div>
      </nav>
  )
}

export default Nav;