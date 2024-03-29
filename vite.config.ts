import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [reactRefresh()],
	esbuild: {
		jsxInject: `import React from 'react'`
	},
	resolve: {
		alias: {
			components: resolve(__dirname, 'src/components'),
			styles: resolve(__dirname, 'src/styles'),
			routes: resolve(__dirname, 'src/routes')
		}
	},
})
