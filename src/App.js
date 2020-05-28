import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Justin Hu',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Justin Hu',
        subTitle: 'Projects',
        homeText: 'Check out my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>


          <NavBar className="border-bottom" bg="transparent" expand="lg"> {/*Responsive collapsing set to large*/}
            <NavBar.Brand>Justin Hu</NavBar.Brand>

            <NavBar.Toggle aria-controls="navbar-toggle" /> 
            <NavBar.Collapse id="navbar-toggle"> {/* Dropdown navigation bar for mobile*/}
              <Nav className="ml-auto"> {/*left margin*/}
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavBar.Collapse>  
          </NavBar>


        </Container>
      </Router>
    );
  }
  
}

export default App;
