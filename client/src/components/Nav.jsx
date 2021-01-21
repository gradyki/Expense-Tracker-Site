import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h2>Expense Tracker</h2>
    <Link to='/'>Home</Link>
      <Link to='/new'>New Expense</Link>
      </nav>
  )
}

export default Nav;