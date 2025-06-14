/* eslint-disable no-undef */

import { loadEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default ({ command, mode }) => {
	const environment = loadEnv(mode, process.cwd())

	console.log('current mode:', command)
	console.log('current environment:', environment)

	return defineConfig({
		base: environment.VITE_PUBLIC_PATH,
		mode: mode,

		server: {
			// bmelchor-note: sets dev server to http://localhost:8080/
			port: 8080,

			// bmelchor-note: proxy for backend dev server to bypass cors
			proxy: {
				'/api': {
					target: 'http://localhost:5000/api',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		},

		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},

		plugins: [
			react(),

			AutoImport({
				imports: ['react', 'react-router-dom'],
				dirs: ['src/store'],

				eslintrc: {
					enabled: true,
					filepath: './.eslintrc-auto-import.json'
				}
			})
		]
	})
}
