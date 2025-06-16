import styles from './styles.module.scss'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const _Navbar = () => {
	return (
		<Navbar expand='sm' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand className={`${styles.brand} d-flex justify-content-center align-items-center`}>
					<img src='/logos/react.svg' className={`${styles.brand_logo} d-inline-block me-2`} />
					<p className='d-inline-block m-0'>Template</p>
				</Navbar.Brand>

				<Navbar.Toggle />

				<Navbar.Collapse>
					<Nav className='ms-auto'>
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>About</Nav.Link>

						<NavDropdown title='Dropdown' data-bs-theme='light'>
							<NavDropdown.Item>Action</NavDropdown.Item>
							<NavDropdown.Item>Action</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Action</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default _Navbar
