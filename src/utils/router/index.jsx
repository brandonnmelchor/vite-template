import { createBrowserRouter } from 'react-router-dom'

import Page from '@/components/layout/Page'
import Home from '@/views/User/Home'

const router = createBrowserRouter(
	[
		{
			path: '',
			element: <Page />,

			children: [
				{
					path: '',
					element: <Home />
				}
			]
		}
	],

	{
		basename: import.meta.env.VITE_PUBLIC_PATH
	}
)

export default router
