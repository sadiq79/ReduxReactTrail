import React, { Component } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import {renderRoutes} from 'react-router-config';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      {renderRoutes(this.props.route.routes)}
      <Footer />
       
      </div>
    );
  }
}

export default App;
