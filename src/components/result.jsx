import React, { Component } from 'react'
import "../bootstrap.css"
class Result extends Component {
   state = {
      allData : this.props.data,
      CountriesData : this.props.data.Countries
      
   }

   handleChange = (event) => {
      this.setState(function() {
         let data = this.state.allData.Countries.filter(F => F.Country.toLowerCase().startsWith(event.target.value.toLowerCase()))
         this.setState({CountriesData : data})
      }) 
   }


   render() {
      const {allData , CountriesData} = this.state
      return (
         <React.Fragment>
            <header>
               <h1 className = "global">Global</h1>

               <h1 className = "cases">Total covid new cases : </h1>
               <h2 className = "cases-number" >{numberWithCommas(allData.Global.TotalConfirmed)}</h2>
               <h3 className = "newCases">new : { numberWithCommas(allData.Global.NewConfirmed)}</h3>
               <h1 fontSize = "2.3rem">TOTAL deaths : </h1>
               <h3 className = "total-deaths">{numberWithCommas(allData.Global.TotalDeaths)}</h3>
               <h3 className = "new-deaths" > new :   {numberWithCommas(allData.Global.NewDeaths)}</h3>
               <h1>Total recovered : </h1>
               <h1 className = "total-recovered">{numberWithCommas(allData.Global.TotalRecovered)}</h1>
               <h3> new : {numberWithCommas(allData.Global.NewRecovered)}</h3>
            </header>
            
               <div className = "searchBox"><input type="text"  onChange = {this.handleChange} placeholder = "find your country" name="" id=""/></div>
               <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">country</th>
      <th scope="col">NewConfirmed</th>
      <th scope="col">TotalConfirmed</th>
      <th scope="col">NewDeaths</th>
      <th scope="col">TotalDeaths</th>
      <th scope="col">NewRecovered</th>
      <th scope="col">TotalRecovered</th>
    </tr>
  </thead>
  <tbody>
     {CountriesData.map(M => {
        
        return (
            <tr key = {M.ID} style = {{textAlign:"center"}}>
               <td >1</td>
               <td><b>{M.Country}</b></td>
               <td className = {M.NewConfirmed === 0 ? "redColor@" : null}>{(M.NewConfirmed === 0 ? <small>N/D</small> : <b fontSize = "1.2rem">{numberWithCommas(M.NewConfirmed)}</b>)}</td>
               <td><b>{numberWithCommas(M.TotalConfirmed)}</b></td>
               <td>{(M.NewDeaths === 0 ? <small>N/D</small> : <b fontSize = "1.2rem">{numberWithCommas(M.NewDeaths)}</b>)}</td>
               <td><b>{numberWithCommas(M.TotalDeaths)}</b></td>
               <td>{(M.NewRecovered === 0 ? <small>N/D</small> : <b fontSize = "1.2rem"> {numberWithCommas(M.NewRecovered)}</b>)}</td>
               <td><b>{numberWithCommas(M.TotalRecovered)}</b></td>
            </tr>
        )
     })}
    
  </tbody>
</table>
         </React.Fragment>
      )
   }


}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


export default Result
