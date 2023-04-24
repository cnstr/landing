import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/epilogue'
import '@fontsource/manrope/latin.css'
import '@fontsource/sora'
import Layout from 'components/Layout'
import { type ReactNode, StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('routes/Home'))
const Privacy = lazy(() => import('routes/Privacy'))
const V1EOL = lazy(() => import('routes/V1EOL'))

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

function LazySuspense({ children }: { children: ReactNode }) {
	return (
		<Suspense fallback={<Box />}>
			{children}
		</Suspense>
	)
}

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<LazySuspense><Home /></LazySuspense>} />
						<Route path='/privacy' element={<LazySuspense><Privacy /></LazySuspense>} />
						<Route path='/v1-eol' element={<LazySuspense><V1EOL /></LazySuspense>} />
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
