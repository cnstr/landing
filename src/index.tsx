import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/epilogue'
import '@fontsource/manrope/latin.css'
import '@fontsource/sora'
import Layout from 'components/Layout'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'routes/Home'
import Privacy from 'routes/Privacy'

const theme = extendTheme({
	fonts: {
		heading: 'Manrope, sans-serif',
		body: 'Epilogue, sans-serif',
	},
	breakpoints: {
		sm: '320px',
		md: '768px',
		lg: '1024px',
		xl: '1440px',
	},
	config: {
		useSystemColorMode: true,
	}
})

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/privacy' element={<Privacy />} />
					</Routes>
				</Layout>
			</BrowserRouter>

		</ChakraProvider>
	)
}

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
