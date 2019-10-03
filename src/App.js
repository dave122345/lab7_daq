import React, { Component } from 'react';
import './App.css';
import Content from './components/Cotent';
import Read from './components/Read';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {


    
    return (
      <Router>
<div className="App">
<Navbar bg="primary" variant="dark">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/read">Read</Nav.Link>
<Nav.Link href="/create">Create</Nav.Link>
</Nav>
</Navbar>
<br />
<Switch>
<Route path='/' component={Content} exact />
<Route exact path='/create' component={Create} />
<Route path='/read' component={Read} />
</Switch>

</div>
</Router>

        
 
    );
  }
}
export default App;



