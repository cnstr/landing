import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/latin.css'
import '@fontsource/raleway/latin.css'
import App from './main'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

const theme = extendTheme({
	fonts: {
		heading: 'Raleway, sans-serif',
		body: 'Inter, sans-serif',
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

ReactDOM.render(
		<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
		</StrictMode>,
	document.getElementById('root')
);
