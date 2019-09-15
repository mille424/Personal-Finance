import React from 'react'
import $ from 'jquery'



class ExpenseLog extends React.Component {
  constructor(props) {
    super(props)
    //set emptyState to values that can be categorized later
    this.emptyState = {
      person: 'unknown',
      amount: 0.00,
      category: 'uncategorized',
      transactionDate: new Date(1900, 0, 1),
      //also have initial list drop downs from database
      categoryList: ['uncategorized', 'eating out', 'gas', 'groceries']
    }

    //the state names correspond to the input ID fields of the form
    this.state = this.emptyState 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let field = e.target.id
    let newValue = e.target.value
    let thisForm = this
    if (field === 'amount') {
      //TO DO...try to let user not have to type decimals first for amount

      thisForm.setState({
        [field]: newValue
      })
      //all other forms just set the state to the typed value
    } else {
      thisForm.setState({
        [field]: newValue
      })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault()
    //check if values of current form match the initial state.  Don't let the form submit if they haven't been changed.
    if (this.state.amount === this.emptyState.amount ||
        this.state.person === this.emptyState.amount ||
        this.state.category === this.emptyState.category ||
        this.state.transactionDate === this.emptyState.transactionDate 
    ) {
      console.log(` txdate ${this.state.transactionDate} empty state transactiondate ${this.emptyState.transactionDate}`)
      alert('please fill out all fields')
    } else {
      $.post({
        url: '/expenses',
        data: this.state,
        success: () => console.log('successful expense post')
          //post to the database and based on the reponse let the user know what happened
      })
    }
  }

  componentDidMount() {
    //To do... query database to get source lists for categories
  }

  render() {
    return (
      <div className="expenses">
        <h2>Enter transaction information below (to do, allow csv upload)</h2>
      <form className="expense-entry" onSubmit={this.handleSubmit}>
        
        <label>Person: </label>
        <select className="create-input" id="person" onChange={this.handleChange}>
          <option>Unknown</option>
          <option>Ryan</option>
          <option>Regina</option>
          <option>Joint</option>
        </select>
       
        <label>Expense Amount:</label>
        <input 
          className="create-input" 
          type='number' min="0.00" 
          step="0.01" 
          onChange={this.handleChange} 
          id="amount" 
          value={this.state.amount}>
        </input>
        
        <label>Expense Category</label>
        <select className="create-input" id="category" onChange={this.handleChange}>
          {this.state.categoryList.map(item => {
            return (<option key={item}>{item}</option>)
          })}
        </select>

        <label>Date:</label>
        <input 
          className="create-input" 
          type="date" 
          onChange={this.handleChange} 
          id = "transactionDate" 
          value={this.state.transactionDate}>
        </input>
        <input className="create-submit-button" type="submit" value="Submit Expenses"></input>
      </form>
      </div>
    )
  }
}

export default ExpenseLog