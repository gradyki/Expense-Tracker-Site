import { Link } from 'react-router-dom'

function Pages() {
  return (
    <div className='links'>
    <Link to='/'>Home</Link>
      <Link to='/table'>Expenses</Link>
      </div>
  )
}

export default Pages;