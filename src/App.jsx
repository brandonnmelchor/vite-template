import { RouterProvider } from 'react-router-dom'
import { useUserStore } from './store/user'
import router from './utils/router'

const App = () => {
	const initializeUser = useUserStore((state) => state.initialize)

	useEffect(() => {
		initializeUser()
	}, [initializeUser])

	return <RouterProvider router={router} />
}

export default App
