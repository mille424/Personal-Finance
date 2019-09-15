import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

//import other react components
import Main from './components/Summary.jsx'
import ExpenseLog from './components/ExpenseLog.jsx'
import Login from './components/Login.jsx'



class App extends React.Component {
  constructor() {
    super();

    //define what state I need
    this.state = {
      view: 'summary'
    }

    //bind clickers to this
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    })
  }

  renderView() {
    const { view } = this.state
    if (view === "summary") {
      return (<div>
        <Main />
      </div>)
    } else if (view === "expense entry") {
      return (<div>
        <ExpenseLog />
      </div>)
    } else if (view === "login") {
      return (<div>
        <Login /></div>
      )
    } else {
      return (<div>something went wrong</div>)
    }
  }

  render() {
    return (

      <div>
        <div className="nav">
          <span className={'logo'}>
            Teammiller Expense Tracking
        </span>
          <span className={this.state.view === 'summary'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('summary')}>
            Summary
        </span>
          <span className={this.state.view === 'expense entry'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('expense entry')}>
            Enter Expenses
        </span>
          <span className={this.state.view === 'budget'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('budget')}>
            Budget
        </span>
          <span className={this.state.view === 'analytics'
            ? 'nav-selected'
            : 'nav-unselected'} onClick={() => this.changeView('analytics')}>
            Analytics
        </span>
          <span className={this.state.view === 'login'
            ? 'nav-selected'
            : 'nav-unselected'} onClick={() => this.changeView('login')}>
            Log in
        </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    )

  }

}




ReactDOM.render(<App />, document.getElementById('main'))