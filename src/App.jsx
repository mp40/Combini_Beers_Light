import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import db from './base'

const fb = db.ref("beer");
// fb.once("value", (data) => {
//   console.log("Toru Firebase Master", data.val());
// })

// const beerState = fb.once("value", (data) => {
//   console.log("MS", data.val());
//   return data.val();
// })

//setState({ searchTerm: event.target.value })
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }
  // setState({ searchTerm: event.target.value })
  componentDidMount() {
    fb.once("value", (data) => {
      this.setState({
        beerState: data.val()
      })
    })
  }
  addBalance() {
    this.setState({ total: this.state.total + 1000 })
  }
  render() {
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
      </div>
    </div>
    );
  }
}
//console.log("HHHIIII", this.props.beers)

//setState(db.ref(beer))

export default App;
