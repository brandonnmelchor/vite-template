import { Stack } from 'react-bootstrap'
import styles from './styles'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Page = ({ children }) => {
	return (
		<Stack style={styles.pageWrapper}>
			<Navbar />
			{children}
			<Outlet />
			<Footer />
		</Stack>
	)
}

export default Page
