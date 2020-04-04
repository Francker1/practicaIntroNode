import React, { Component } from 'react';
import axios from 'axios';

import "./App.css";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ads: []
    }
}

  componentDidMount() {
    axios.get(`http://localhost:9000/apiv1/ads`)
      .then(res => {
        const ads = res.data;
        this.setState({ ads });
      }).catch(() => {
        alert("Error to list advertisements, pleas try again");
      })
  }

  render() {
    return (
      <ul>
        { this.state.ads.map(person => <li key={person._id}>{person.name}</li>)}
      </ul>
    )
  }
}