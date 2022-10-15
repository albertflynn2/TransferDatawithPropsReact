import 'antd/dist/antd.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home'
import PageTwo from './Components/PageTwo'
import Header from './Components/Header'
export const myContext = React.createContext();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  handeler = (value) => {
    this.setState({
      ...value
    });
  };


  render() {
    const providerWrapper = (Consumer) => (
      <myContext.Provider value={this.state}>
        {Consumer}
      </myContext.Provider>
    );
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={() => (providerWrapper(<Home change={this.handeler} />))} />
          <Route path="/PageTwo" component={() => providerWrapper(<PageTwo />)} />
        </div>
      </Router>
    )
  }
}