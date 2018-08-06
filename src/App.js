import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(){
    super()
    this.state={
      selector: 1,
      desiredArr: []
    }
  }
  componentDidMount(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.selector}/`).then(res => {
      this.setState({
        desiredArr: [
          res.data.id,
          res.data.name,
          res.data.sprites.front_default
        ]
      })
    })
  }

  handleClickNext(){
   
    let num = ++this.state.selector ;
    this.setState({
      selector: num
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.selector}/`).then(res => {
      this.setState({
        desiredArr: [
          res.data.id,
          res.data.name,
          res.data.sprites.front_default
        ]
      })
    })
  }

  handleClickPrevious(){
    let num = --this.state.selector ;
    this.setState({
      selector: num
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.selector}/`).then(res => {
      this.setState({
        desiredArr: [
          res.data.id,
          res.data.name,
          res.data.sprites.front_default
        ]
      })
    })
  }

  



  render() {
    return (
      <div className="PokeCard">
        
          <button onClick={()=> this.handleClickPrevious()}>-</button>
         <div className="Info" >
            <h1>{this.state.desiredArr[1]}</h1>
        <img src={this.state.desiredArr[2]} alt="" />
        <p>{this.state.desiredArr[0]}</p>
        </div>
        
        <button onClick={()=> this.handleClickNext()}> + </button>
      </div>
    );
  }
}

export default App;
