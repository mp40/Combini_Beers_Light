import React from 'react';
import beer from './beer.png';
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

  componentDidMount() {
    fbABig.once("value", (data) => {
      this.setState({
        asahiBig: data.val()
      })
    })
    fbASmall.once("value", (data) => {
      this.setState({
        asahiSmall: data.val()
      })
    })
    fbYBig.once("value", (data) => {
      this.setState({
        yebisuBig: data.val()
      })
    })
    fbYSmall.once("value", (data) => {
      this.setState({
        yebisuSmall: data.val()
      })
    })
    this.setState({ displayAdvice: ["Go on, you've earned it"] })
  }

  addBalance() {
    this.setState({ total: this.state.total + 1000 })
    this.setState({ displayAsahi: [] })
    this.setState({ displayYebisu: [] })
    this.setState({ displayAdvice: ["Go on, you've earned it"] })
  }

  calcAsahi() {
    let sum = this.state.total;
    const canBig = this.state.asahiBig;
    const canSmall = this.state.asahiSmall;
    let can500 = 0;
    let can350 = 0;

    can500 = Math.round(sum / (canBig * 1.08)); //adjusted for 8% sales tax
    can350 = sum - can500 > (canSmall * 1.08) ? 1 : 0;

    this.setState({ displayAsahi: ["Total Asahi: ", can500, " x 500ml & ", can350, " x 350ml"] })
    this.setState({ total: 0 })
    this.setState({ displayYebisu: [] })
    this.setState({ displayAdvice: ["drink responsibly - then have another"] })
  }

  calcYebisu() {
    let sum = this.state.total;
    const canBig = this.state.yebisuBig;
    const canSmall = this.state.yebisuSmall;
    let can500 = 0;
    let can350 = 0;

    can500 = Math.round(sum / (canBig * 1.08));//adjusted for 8% sales tax
    can350 = sum - can500 > (canSmall * 1.08) ? 1 : 0;

    this.setState({ displayYebisu: ["Total Yebisu: ", can500, " x 500ml & ", can350, " x 350ml"] })
    this.setState({ total: 0 })
    this.setState({ displayAsahi: [] })
    this.setState({ displayAdvice: ["drink responsibly - then have another"] })
  }

  render() {
    return (<div className="App" >
      <header className="App-header">
        <img src={beer} className="App-logo" alt="logo" />
        <p className="Another">
          How About Another?
        </p >
        <div className="Calcs">
          <button className="Yen" onClick={this.addBalance.bind(this)}>Add 1000 Yen</button>
          <p className="Beer-results">Total: {this.state.total} Yen</p>
          <button className="Asahi" onClick={this.calcAsahi.bind(this)}>Asahi Super Dry</button>
          <p className="Beer-results">{this.state.displayAsahi}</p>
          <button className="Yebisu" onClick={this.calcYebisu.bind(this)}>Yebisu</button>
          <p className="Beer-results">{this.state.displayYebisu}</p>
          <p className="Advice">{this.state.displayAdvice}</p>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
