import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';


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


          <NavBar className="border-bottom" bg="transparent" expand="lg"> {/*Header*/}
            <NavBar.Brand>Justin Hu</NavBar.Brand>

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" /> {/* Dropdown navigation bar for mobile*/}
            <NavBar.Collapse id="navbar-toggle"> 
              <Nav className="ml-auto"> {/*left margin*/}
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavBar.Collapse>  
          </NavBar>

          <Footer />


        </Container>
      </Router>
    );
  }
  
}

export default App;
