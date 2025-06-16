import styles from './styles.module.scss'

import { Container } from 'react-bootstrap'

const Footer = () => {
	return (
		<div className='bg-secondary-subtle'>
			<Container className={`${styles.footer}`}>
				<p className='m-0 d-inline-block small'>Template</p>
			</Container>
		</div>
	)
}

export default Footer
