import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import db from './base'

const fbABig = db.ref("beer/asahi/0");
const fbASmall = db.ref("beer/asahi/1");
const fbYBig = db.ref("beer/yebisu/0");
const fbYSmall = db.ref("beer/yebisu/1");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  // componentDidMount() {
  //   fb.once("value", (data) => {
  //     this.setState({
  //       beerState: data.val()
  //     })
  //   })
  // }

  componentDidMount() {
    fbABig.once("value", (data) => {
      this.setState({
        asahiBig: data.val()
      })
    })
    fbASmall.once("value", (data) => {
      this.setState({
        asahiBig: data.val()
      })
    })
    fbYBig.once("value", (data) => {
      this.setState({
        asahiBig: data.val()
      })
    })
    fbYSmall.once("value", (data) => {
      this.setState({
        asahiBig: data.val()
      })
    })
  }



  addBalance() {
    this.setState({ total: this.state.total + 1000 })
  }
  calcAsahi() {
    let sum = this.state.total;
    const canBig = this.state.asahiBig;
    console.log("$?", canBig);
    const canSmall = this.state.asahiSmall;
    let can500 = 0;
    let can350 = 0;
    console.log("$$$$", sum)
    // let promise = new Promise(function (resolve) {
    //   return fetch("https://pokeapi.co/api/v2/pokemon/")
    //     .then(function (response) {
    //       return response.json(); //get data
    //     })

    // let promise = new Promise(function (resolve) {
    //   while (sum > canBig) {
    //     can500++;
    //     console.log("Add500", can500)
    //     sum = - canBig;
    //   }
    //   resolve();
    // })
    // promise.then();

    const promiseBeer = new Promise(resolve)=> {
      let result = sum
      while (result > canBig) {
        can500++;
        console.log("Add500", can500)
        result = - canBig;
      }
      resolve(result);
    }


    while (sum > canBig) {
      can500++;
      console.log("Add500", can500)
      sum = - canBig;
    }



    while (sum > canSmall) {
      can350++;
      sum = - canSmall;
    }
    console.log("CCC", can500, can350)
    // function testing(item) {
    //   const can = 0;
    //   while (this.state.total > item) {
    //     can++;
    //     this.setState({ total: this.state.total -= item })
    //   }
    //   return can;
    // }

    // const can500 = testing(this.state.beerState.asahi[0]);
    // const can350 = testing(this.state.beerState.asahi[1]);

    //===return `500ml: ${can500}\n 350ml: ${can350}\n Change: ${sum} yen`;
    //  }

    //  console.log(newTestCalc(3000, 248, 185)) // money in pocket, cost of 500ml and 350ml Aashi Super Dry
    //this.setState({ displayAsahi: [can500, can350] })
  }
  calcYebisu() {
    //do calc
    this.setState({ displayAsahi: [0, 0] })
    //console.log(this.displayAsahi)
  }
  render() {
    // console.log("XXXX", this.state.asahiBig)
    // console.log(this.state.asahiSmall)
    // console.log("XXXX", this.state.yebisuBig)
    // console.log(this.state.yebisuSmall)
    return (<div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FFS
        </p >
      </header>
      <div>
        <button className="Yen" onClick={this.addBalance.bind(this)}>1000 Yen</button>
        <p>Total: {this.state.total}</p>
        <button className="Asahi" onClick={this.calcAsahi.bind(this)}>Asahi Super Dry</button>
        <p>Total Asahi: {this.state.displayAsahi}</p>
        <button className="Yebisu" onClick={this.calcYebisu.bind(this)}>Yebisu</button>
        <p>Total Yebisu: {this.state.displayYebisu}</p>
      </div>
    </div>
    );
  }
}

export default App;

// function newTestCalc (sum, itemOne, itemTwo) {
//   function testing (item) {
//   let can = 0;
//   while (sum > item) {
//    can++;
//    sum -= item;
//   }
//   return can;
//  }

//   let can500 = testing(itemOne);
//   let can350 = testing(itemTwo);
//   return `500ml: ${can500}\n 350ml: ${can350}\n Change: ${sum} yen`;
//  }

//  console.log(newTestCalc(3000, 248, 185)) // money in pocket, cost of 500ml and 350ml Aashi Super Dry