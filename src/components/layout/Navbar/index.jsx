import styles from './styles'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const _Navbar = () => {
	return (
		<Navbar expand='sm' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand className='d-flex justify-content-center align-items-center'>
					<img src='/logos/vite.svg' width='30' height='30' className='d-inline-block me-2' />
					<p className='d-inline-block m-0'>Vite Template</p>
				</Navbar.Brand>

				<Navbar.Toggle />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#link'>Link</Nav.Link>

						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default _Navbar
