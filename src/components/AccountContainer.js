import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      searchInput: "",
      filteredTransactions: []
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  handleChange = event => {
    // your code here
    console.log(event.target.value);
    this.setState({
      searchInput: event.target.value
    });
  };

  filteredTransactions = () => {
    return this.state.transactions.filter(
      transaction =>
        transaction.description
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase()) ||
        transaction.category
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase())
    );
  };

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(response => response.json())
      .then(transactions =>
        //console.log(transactions);
        this.setState({
          transactions: transactions
        })
      );
  }

  render() {
    //console.log(this.state.transactions);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          transactions={this.state.transactions}
          filteredTransaction={this.filteredTransactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
