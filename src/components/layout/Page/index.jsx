import { Stack } from 'react-bootstrap'
import styles from './styles'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Page = () => {
	return (
		<Stack className='vw-100 vh-100'>
			<Navbar />
			{/* <Outlet /> */}
			<Footer />
		</Stack>
	)
}

export default Page
