import React from 'react'

const Transaction = (props) => {
  //console.log(props)
  return (
    <tr>
      <td>{props.posted_at}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction
