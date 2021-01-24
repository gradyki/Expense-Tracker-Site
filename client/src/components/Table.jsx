import * as BootStrap from 'react-bootstrap'

function Table(props) {
  const {expenses,sortName, sortDate, sortNote, sortAmount, sortStatus}= props

  const createTableRows = (expense) => {
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


    <BootStrap.Table striped bordered hover>
    <thead>
      <tr>
        
        <th onClick={sortName}>Name</th>
        <th onClick={sortDate}>Date</th>
        <th onClick={sortNote}>Notes</th>
        <th onClick={sortAmount}>Amount</th>
        <th onClick={sortStatus}>Status</th>
      </tr>
    </thead>
              <tbody>
            {expenses.map(createTableRows)}
    </tbody>
  </BootStrap.Table>
  )
}

export default Table;