import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/apiv1/ads")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));

  }

  componentDidMount() {
      this.callAPI();
  }

  render(){
    return(
      <div>
        {this.state.apiResponse}
      </div>
    );
  }

}

export default App;
