import { Box, ChakraProvider, ColorModeScript, Container, extendTheme, Flex, Grid, Heading, Image, Link, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import '@fontsource/raleway/latin.css'
import '@fontsource/inter/latin.css'


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
		initialColorMode: 'light',
		useSystemColorMode: true,
	}
})

ReactDOM.render(
	<StrictMode>
		<ColorModeScript initialColorMode='light' />
		<ChakraProvider theme={theme}>
			<Container maxWidth={1024} marginX='auto' paddingX={8}>
				<Flex alignItems='center' marginLeft={-6} marginTop={2}>
					<Image width={{ base: 50, md: 75, lg: 90 }} src='/canister.svg' />
					<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} >Canister</Heading>
				</Flex>
				<Flex alignItems='center' gridGap={4} flexDir={{ base: 'column-reverse', md: 'row' }}>
					<Box>
						<Heading
							fontWeight='bold'
							fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }}
							textAlign={{ base: 'center', md: 'left' }}
							opacity={0.8}
						>
							{'A high-speed '}
							<Heading d='inline' fontSize='inherit' color='#407BFF'>
								search engine
							</Heading>
							{' created '}
							{' for '}
							<Heading d='inline' fontSize='inherit' color='#2D57B3' fontWeight='extrabold'>
								Jailbreaking
							</Heading>
							{'.'}
						</Heading>
					</Box>
					<Box>
						<Image marginX='auto' width={{ sm: 1000, md: 1400, lg: 1800, xl: 2200 }} src='/search.svg' />
					</Box>
				</Flex>
				<Spacer margin={8} />
				<Flex gridGap={6} flexDir={{ base: 'column', md: 'row' }}>
					<Box maxW='xs'>
						<Heading fontSize='xl' marginBottom={2}>What is Canister?</Heading>
						<Text marginBottom={4}>
							Canister is a tool unlocking the ability to search for thousands of packages across hundreds of different Jailbreak repositories. All of this information is accessible through a public API with future plans to host a website for users to interact with the search engine directly.
						</Text>
					</Box>
					<Box>
						<Heading fontSize='xl' marginBottom={2}>Who is using Canister?</Heading>
						<Text marginBottom={4}>
							Canister's powerful, yet simple to implement API has led to various popular tools and services in the community to embrace and integrate it into their products. If you would like to use the Canister API to build your next idea, please <Link textDecor='underline' href='mailto:support@aerum.co'>
								contact me
							</Link>.
						</Text>

						<Flex alignItems='center' flexDir={{ base: 'column', md: 'row' }}>
							<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
								<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
									<Image
										src='/sileo.svg'
										label='Sileo'
										width={{ base: 100 }}
										height={{ base: 100 }}
									/>
									<Link href='https://getsileo.app' isExternal>
										<Text fontSize='sm' marginTop={3}>Sileo</Text>
									</Link>
								</Flex>
								<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
									<Image
										src='/chariz.svg'
										label='Chariz'
										width={{ base: 100 }}
										height={{ base: 100 }}
									/>
									<Link href='https://chariz.com' isExternal>
										<Text fontSize='sm' marginTop={3}>Chariz</Text>
									</Link>
								</Flex>
							</Flex>

							<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
								<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
									<Image
										src='/packix.svg'
										label='Packix'
										width={{ base: 100 }}
										height={{ base: 100 }}
									/>
									<Link href='https://repo.packix.com' isExternal>
										<Text fontSize='sm' marginTop={3}>Packix</Text>
									</Link>
								</Flex>
								<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
									<Image
										src='/rjailbreak.svg'
										label='r/Jailbreak'
										width={{ base: 100 }}
										height={{ base: 100 }}
									/>
									<Link href='https://discord.gg/jb' isExternal>
										<Text fontSize='sm' marginTop={3}>r/Jailbreak</Text>
									</Link>
								</Flex>
							</Flex>
							<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
								<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
									<Image
										src='/tweakreviewsdb.svg'
										label='TweakReviewsDB'
										width={{ base: 100 }}
										height={{ base: 100 }}
									/>
									<Link href='https://tweakreviews.pixelomer.com' isExternal>
										<Text fontSize='sm' marginTop={3}>TweakReviewsDB</Text>
									</Link>
								</Flex>
							</Flex>
						</Flex>
					</Box>
				</Flex>

				<Box m={4}>
					<Flex justifyContent='center' alignItems='center' flexDir='column'>
						<Text fontSize='sm'>
							{'Copyright © '}{new Date().getFullYear()}{', '}
							<Link href='https://aerum.co' isExternal>
								Aerum LLC.
							</Link>
						</Text>
						<Text fontSize='xx-small' align='center' opacity={0.25}>
							<Link href='https://storyset.com/web' isExternal>
								Web illustrations by Storyset
							</Link>
						</Text>
						<Flex justifyContent='center' alignItems='center'>
							<Image width={{ base: 25, lg: 50 }} src='/canister.svg' />
							×
							<Image width={{ base: 25, lg: 50 }} src='/aerum.svg' />
						</Flex>
					</Flex>

				</Box>
			</Container>
		</ChakraProvider>
	</StrictMode>,
	document.getElementById('root')
);
