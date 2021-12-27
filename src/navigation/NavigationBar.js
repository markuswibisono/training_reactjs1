import React, { Component } from 'react';
import Nav from 'react-bootstrap';
import NavItem from 'react-bootstrap';
import NavDropdown from 'react-bootstrap';
import MenuItem from 'react-bootstrap';

class NavigationBar extends Component {
    
  render() {
    return (
     
      <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
      <NavItem eventKey={1} >Bom X-Ray</NavItem>
      <NavItem eventKey={2} title="Item">Calculation</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
      </NavDropdown>
  </Nav>


    );
  }
  
}

export default  NavigationBar;