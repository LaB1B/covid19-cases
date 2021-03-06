import './App.css';
import React, { Component } from 'react'
import axios from "axios"
import Result from "./components/result.jsx"
import "./responsive.css"
import facebook from "./icons/facebook.svg"
import github from "./icons/github.svg"
import twitter from "./icons/twitter.svg"

class App extends Component {
  state = {
    allData : []
  }
  
  componentDidMount() { 
    
      axios.get("https://api.covid19api.com/summary")
      .then((data) => {
        this.Rank(data.data)

      })
      .catch((err) => alert("Facing Server request problem "))
    }
    
Rank(data) {
  let allData = data
  let Ranked = data.Countries;
  Ranked.sort(function(a , b ) {
    return b.TotalConfirmed - a.TotalConfirmed;
  })

  for (let x = 0 ; x < Ranked.length; x++) {
    Ranked[x].rank = x + 1
  }
  allData.Countries = Ranked
  this.setState({allData})

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
          
          <div className="nav-logo">
            <h1>check things</h1>
          </div>
          <div className="links">
            <h3>covid 19</h3>
            <h3>population</h3>
          </div>
        </nav>

        {this.handleRender()}
        <Footer/>

      </React.Fragment>
    );
  }
}




function Footer() {
  return (
    <footer>
      <div className="me">
        <h3>about creator: </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia
          qui id dignissimos est delectus, esse accusamus similique suscipit
          quasi.
        </p>
      </div>
      <div className="icons">
        <small>follow creator on :</small>
        <div>
          <a
            rel="noreferrer"
            href="https://facebook.com/asif.zawad.54/"
            target="_blank"
          >
            <img src={facebook} alt="" />
          </a>
          <a rel="noreferrer" href="https://github.com/LaB1B" target="_blank">
            <img src={github} alt="" />
          </a>
          <a rel="noreferrer" href="#" target="_blank">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}




export default App
