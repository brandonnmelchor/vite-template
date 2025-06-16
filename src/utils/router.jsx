import { createBrowserRouter } from 'react-router-dom'

import Window from '@/components/layout/Window'

import About from '@/views/User/About'
import Action from '@/views/User/Action'
import Home from '@/views/User/Home'

const router = createBrowserRouter(
	[
		{
			path: '',
			element: <Window />,

			children: [
				{
					path: '/about',
					element: <About />
				},

				{
					path: '/action',
					element: <Action />
				},

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
