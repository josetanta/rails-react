import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button
} from 'react-bootstrap';

export const NavbarPage = (props) => {
  return (
  	<Fragment>
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand><Link to="/">Application</Link></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Link className='nav-link' to='/articles'>Articulos</Link>
			      <Link className='nav-link' to='/authors'>Autores</Link>
			    </Nav>
			    <Form inline>
			      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-success">Search</Button>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
  	</Fragment>
  )
}