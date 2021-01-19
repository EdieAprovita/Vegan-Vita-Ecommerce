import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>Vegan-Vita</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='cart'>Cart</Nav.Link>
						<Nav.Link href='login'>Sign In</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default Header