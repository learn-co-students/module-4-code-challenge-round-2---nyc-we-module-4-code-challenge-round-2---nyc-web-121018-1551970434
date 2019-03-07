import React from 'react'

const Search = (props) => {

  console.log(props.value)

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.value}
        onChange={props.searchFeature}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
