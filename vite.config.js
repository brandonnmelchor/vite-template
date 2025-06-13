/* eslint-disable no-undef */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default ({ command, mode }) => {
	const environment = loadEnv(mode, process.cwd())

	console.log('current mode:', command)
	console.log('current environment:', environment)

	return defineConfig({
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
		],

		base: environment.VITE_PUBLIC_PATH,
		mode: mode,

		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},

		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:5000', // bm-note: update as needed
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		}
	})
}
