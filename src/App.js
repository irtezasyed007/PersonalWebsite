import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Navbar, NavItem, Nav, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectsPage from './projects/ProjectsPage.js';
import EducationPage from './education/EducationPage.js';
import ExperiencePage from './experience/ExperiencePage.js';
import AboutPage from './about/AboutPage.js';
import HomePage from './home/HomePage.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="FixedUI"> 
          <header className="App-header">
            <div style={{float: 'right'}}>
              <img src={logo} className="App-logo" alt="logo" style={{verticalAlign: 'middle'}}/>
              <p>Powered by React.js</p>  
            </div>
            <PageHeader className="App-title">
              <LinkContainer exact to="/~syed" style={{textDecoration: 'none', color: '#327AB7'}}>
                <a href="/" style={{color: 'inherit'}}>Irteza Syed (Under Construction)</a>
              </LinkContainer>
              <div style={{fontStyle: 'italic', textAlign: 'center'}}>
                <small>Email: irteza.m.syed@gmail.com</small>
              </div>
            </PageHeader>
          </header>
          <Navbar inverse collapseOnSelect fluid style={{borderRadius: 0}}>
            <Navbar.Header>
              <Navbar.Brand>
              {/*Might add something here later*/}
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav justified bsStyle="tabs">
                <LinkContainer to="/~syed/projects">
                  <NavItem eventKey={1}>
                    Projects
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/~syed/education">
                  <NavItem eventKey={2}>
                    Education
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/~syed/experience">
                  <NavItem eventKey={3}>
                    Experience
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/~syed/about">
                  <NavItem eventKey={4}>
                    About Me
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Route exact path="/~syed" render={(routeProps) => <HomePage {...routeProps}/>}/>
        <Route path="/~syed/projects" render={(routeProps) => <ProjectsPage {...routeProps}/>}/>
        <Route path="/~syed/education" render={(routeProps) => <EducationPage {...routeProps}/>}/>
        <Route path="/~syed/experience" render={(routeProps) => <ExperiencePage {...routeProps}/>}/>
        <Route path="/~syed/about" render={(routeProps) => <AboutPage {...routeProps}/>}/>
      </div>
    );
  }
}

export default App;
