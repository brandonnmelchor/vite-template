import Page from '@/components/layout/Page'
import Home from '@/views/User/Home'

const App = () => {
	return (
		<Page>
			<Home />
		</Page>
	)
}

// import { RouterProvider } from 'react-router-dom'

// import GlobalProvider from '@/components/GlobalProvider'
// import router from '@/router'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <GlobalProvider>
//       <RouterProvider router={router} />
//     </GlobalProvider>
//   </React.StrictMode>,
// )

export default App
