import { Stack } from 'react-bootstrap'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Window = () => {
	return (
		<Stack className='vw-100 vh-100'>
			<Navbar />

			<Stack className='py-4'>
				<Outlet />
			</Stack>

			<Footer />
		</Stack>
	)
}

export default Window
