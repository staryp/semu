import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FindSemuProcess from './FindSemuProcess';

class App extends Component {
  render () {
    return(
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src='icon/menu.png' className="menu" alt="logo" width="30"/>
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            세무사앱
          </Nav>
          <Form inline>
            <img src='icon/alarm.png' className="menu" alt="logo" width="30"/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <FindSemuProcess></FindSemuProcess>
    </div> 
    );
  }
}

export default App;
