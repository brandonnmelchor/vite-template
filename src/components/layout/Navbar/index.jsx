import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const _Navbar = () => {
	return (
		<Navbar expand='sm' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand as={Link} to='/' className={`${styles.brand} d-flex justify-content-center align-items-center`}>
					<img src='/logos/react.svg' className={`${styles.brand_logo} me-2 d-inline-block `} />
					<p className='m-0 d-inline-block '>Template</p>
				</Navbar.Brand>

				<Navbar.Toggle />

				<Navbar.Collapse>
					<Nav className='ms-auto'>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>

						<Nav.Link as={Link} to='/about'>
							About
						</Nav.Link>

						<NavDropdown title='Dropdown' data-bs-theme='light'>
							<NavDropdown.Item as={Link} to='/action'>
								Action
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} to='/action'>
								Action
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item as={Link} to='/action'>
								Action
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default _Navbar
