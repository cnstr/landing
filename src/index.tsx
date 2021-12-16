import { Box, ChakraProvider, ColorModeScript, extendTheme, Flex, Grid, Heading, Image, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import '@fontsource/raleway/latin.css'
import '@fontsource/inter/latin.css'


const theme = extendTheme({
	fonts: {
		heading: 'Raleway, sans-serif',
		body: 'Inter, sans-serif',
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
			<Box maxW={1200} marginX='auto'>
				<Flex alignItems='center' gridGap={4}>
					<Image width={100} src='/canister.svg' />
					<Heading>Canister</Heading>
				</Flex>
				<Flex alignItems='center' marginX='auto' gridGap={4}>
					<Box marginBottom={16} marginX={4}>
						<Text fontWeight='bold' fontSize={['3xl', '5xl']} opacity={0.8}>
							{'Next-generation '}
							<Text d='inline' color='#407BFF'>
								search engine
							</Text>
							{' for the '}
							<Text d='inline' color='#407BFF'>
								Jailbreak
							</Text>
							{' community.'}
						</Text>
					</Box>
					<Image marginX='auto' width={[400, 800]} src='/search.svg' />
				</Flex>
				<Flex alignItems='flex-start' marginX='auto' gridGap={4}>
					<Box m={4} maxW='xl'>
						<Text fontSize='3xl' fontWeight='bold'>What’s Canister?</Text>
						<Text marginY={4}>
							Canister is a state of the art search engine capable of retrieving data on thousands of packages spread across hundreds of repositories for your Jailbroken device. Currently it functions as an API, powering some of your favorite tools, but a website for everyone to browse is coming soon.
						</Text>
					</Box>
					<Box>
						<Text fontSize='3xl' fontWeight='bold'>Who’s using Canister?</Text>
						<Flex marginY={4} alignItems='center' gridGap={8}>
							<Box justifyContent='center' alignItems='center' textAlign='center' columnGap={6}>
								<Image
									src='/sileo.svg'
									label='Sileo'
									width={[50, 100]}
								/>
								<Link href='https://github.com/Sileo/Sileo' isExternal>
									<Text decoration='underline' fontSize='lg' marginTop={3}>Sileo</Text>
								</Link>
							</Box>
							<Box justifyContent='center' alignItems='center' textAlign='center' columnGap={6}>
								<Image
									src='/chariz.svg'
									label='Chariz'
									width={[50, 100]}
								/>
								<Link href='https://chariz.com' isExternal>
									<Text decoration='underline' fontSize='lg' marginTop={3}>Chariz</Text>
								</Link>
							</Box>
							<Box justifyContent='center' alignItems='center' textAlign='center' columnGap={6}>
								<Image
									src='/packix.svg'
									label='Packix'
									width={[50, 100]}
								/>
								<Link href='https://repo.packix.com' isExternal>
									<Text decoration='underline' fontSize='lg' marginTop={3}>Packix</Text>
								</Link>
							</Box>
							<Box justifyContent='center' alignItems='center' textAlign='center' columnGap={6}>
								<Image
									src='/rjailbreak.svg'
									label='r/Jailbreak'
									width={[50, 100]}
								/>
								<Link href='https://discord.gg/jb' isExternal>
									<Text decoration='underline' fontSize='lg' marginTop={3}>r/Jailbreak</Text>
								</Link>
							</Box>
						</Flex>
					</Box>
				</Flex>
				<Box m={4}>
					<Flex alignSelf='flex-end' justifyContent='center' alignItems='center'>
						<Text fontSize='sm'>
							{'Copyright © '}{new Date().getFullYear()}{', '}
							<Link href='https://aerum.co' isExternal>
								Aerum LLC.
							</Link>
						</Text>
						<Image width={50} src='/aerum.svg' />
					</Flex>
					<Text fontSize='xx-small' align='center'><a href='https://storyset.com/web'>Web illustrations by Storyset</a></Text>
				</Box>
			</Box>
		</ChakraProvider>
	</StrictMode>,
	document.getElementById('root')
);
