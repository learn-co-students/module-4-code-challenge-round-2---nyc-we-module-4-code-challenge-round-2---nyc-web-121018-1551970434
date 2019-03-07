import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

const apiUrl = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions : [],
      filteredTransactions : []
    }
    //leaving this here because it will be replaced on fetch

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch(apiUrl)
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions,
      filteredTransactions: transactions
    }))
    //.then(a => console.log(this.state))
    //logging state after fetch to check transactions
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    //console.log(this.state)
    let search = event.target.value
    let filteredTransactions = this.state.transactions
    filteredTransactions = filteredTransactions.filter(t => {
      return (t.category.toLowerCase().includes(search)) ||(t.description.toLowerCase().includes(search)) })
    this.setState({filteredTransactions})
    // console.log(filteredTransactions)
    // console.log(this.state)
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
