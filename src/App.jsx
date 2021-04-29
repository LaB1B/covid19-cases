import './App.css';
import React, { Component } from 'react'
import axios from "axios"
import Result from "./components/result.jsx"

class App extends Component {
  state = {
    allData : []
  }
  
  componentDidMount() { 
      axios.get("https://api.covid19api.com/summary")
      .then((data) => this.setState({allData : data.data}))
      .catch((err) => console.log(err))
  }

  

  handleRender = () => {
    if (this.state.allData.length === 0) {
      return <div><span className = "donutSpinner"></span></div>

    }
    else {
      return (
        <Result data = {this.state.allData}/>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-logo"><h1>check things</h1></div>
          <div className="links">
            <h3>covid 19</h3>
            <h3>population</h3>
          </div>
        </nav>
        {this.handleRender()}
      </React.Fragment>
    )
  }
}



export default App
