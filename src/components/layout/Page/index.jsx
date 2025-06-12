import styles from './styles'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Page = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Outlet />
			<Footer />
		</>
	)
}

export default Page
