import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
        transactions: transactions,
        searchTerm: ''
    }

  }


  componentDidMount(){
    const API = 'https://boiling-brook-94902.herokuapp.com/transactions'
    fetch(API)
    .then(results => results.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }


  // filterTransaction = event => {
  //   if (this.state.searchTerm === ""){
  //     return this.state.transactions
  //   } else {
  //     return this.state.transaction.filter(transaction => {
  //       return transaction.category.includes(this.state.searchTerm.toLowerCase())
  //     })
  //   }
  // }

  //  Implement filter into the handleChange function

  handleChange = (event,{ value } ) => {
    // your code here
    this.setState({
      searchTerm: value
    })
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <Search  searchFeature={this.handleChange} value={this.state.searchTerm}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
