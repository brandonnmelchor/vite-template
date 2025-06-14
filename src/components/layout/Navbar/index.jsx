import styles from './styles'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const _Navbar = () => {
	return (
		<Navbar expand='sm' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand className={styles.brand.className} style={styles.brand.style}>
					<img src='/logos/react.svg' className={styles.brandLogo.className} style={styles.brandLogo.style} />
					<p className={styles.brandText.className}>Template</p>
				</Navbar.Brand>

				<Navbar.Toggle />

				<Navbar.Collapse>
					<Nav className={styles.nav.className}>
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>About</Nav.Link>

						<NavDropdown title='Dropdown'>
							<NavDropdown.Item>Action</NavDropdown.Item>
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
