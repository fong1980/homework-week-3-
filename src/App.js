//app.js
import React, { Component } from "react"
import { connect } from "react-redux"
//import { increment, decrement } from "./actions/counter" //step6
import { newgame,makeguess } from "./actions/game" //step6

import logo from "./logo.svg"
import "./App.css"

class App extends Component {


  handleClick= () => {
    this.props.newgame()
  }

  handleClick_= () => {
    this.props.makeguess()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // step 5
        <h2>{this.props.game.newWord} </h2>

        <button onClick={this.handleClick}>Start New Game</button>

        <form onSUbmit={this.handleClick_}>
            <input type="text" />
            <button type="submit"placeholder="First name">make a guess</button>
        </form>

        <button onClick={this.handleClick___}>+</button>

      </div>
    )
  }
}

//step 4
const mapStateToProps = state => {
  return {
    //counter_: state.counter
    game: state.newgame,
    //game: state.makeguessReducer

  }
}

export default connect(mapStateToProps, {newgame,makeguess })(App) //step 4 //step 6 (increment +decrement)
