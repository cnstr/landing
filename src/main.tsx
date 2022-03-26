import { Box, Button, Container, Flex, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import Analytics from './analytics'

export default function App() {
	return (
		<Container maxWidth={1024} marginX='auto' paddingX={8}>
			<Flex alignItems='center' marginLeft={-6} marginTop={2}>
				<Image width={{ base: 50, md: 75, lg: 90 }} src='/canister.svg' />
				<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} >Canister</Heading>
			</Flex>
			<Flex alignItems='center' textAlign={{ base: 'center', md: 'left' }} gridGap={4} flexDir={{ base: 'column-reverse', md: 'row' }}>
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
					<Link href='https://docs.canister.me'>
						<Button size='lg' variant='outline' mt={8}>Get Started with the API</Button>
					</Link>
				</Box>
				<Box>
					<Image marginX='auto' width={{ sm: 1000, md: 1400, lg: 1800, xl: 2200 }} src='/search.svg' />
				</Box>
			</Flex>
			<Spacer margin={8} />
			<Flex gridGap={6} flexDir='column' alignItems='center'>
				<Analytics />
				<Box maxW='2xl'>
					<Heading fontSize='xl' marginBottom={2}>What is Canister?</Heading>
					<Text marginBottom={4}>
						Canister is a tool unlocking the ability to search for thousands of packages across hundreds of different Jailbreak repositories. All of this information is accessible through a public API with future plans to host a website for users to interact with the search engine directly.
					</Text>
				</Box>
				<Box maxW='2xl'>
					<Heading fontSize='xl' marginBottom={2}>Who is using Canister?</Heading>
					<Text marginBottom={4}>
						Canister's powerful, yet simple to implement API has led to various popular tools and services in the community to embrace and integrate it into their products. If you would like to use the Canister API to build your next idea, check out the <Link textDecor='underline' href='https://docs.canister.me'>
							documentation
						</Link> or please <Link textDecor='underline' href='mailto:support@aerum.co'>
							contact me
						</Link>.
					</Text>

					<Flex alignItems='center' justifyContent='center' flexDir={{ base: 'column', md: 'row' }}>
						<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
							<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
								<Image
									src='/sileo.jpg'
									borderRadius={25}
									alt='Sileo'
									width={100}
									height={100}
								/>
								<Link href='https://getsileo.app' isExternal>
									<Text fontSize='sm' marginTop={3}>Sileo</Text>
								</Link>
							</Flex>
							<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
								<Image
									src='/chariz.jpg'
									borderRadius={25}
									alt='Chariz'
									width={100}
									height={100}
								/>
								<Link href='https://chariz.com' isExternal>
									<Text fontSize='sm' marginTop={3}>Chariz</Text>
								</Link>
							</Flex>
						</Flex>

						<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
							<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
								<Image
									src='/zebra.jpg'
									borderRadius={25}
									alt='Zebra'
									width={100}
									height={100}
								/>
								<Link href='https://getzbra.com' isExternal>
									<Text fontSize='sm' marginTop={3}>Zebra</Text>
								</Link>
							</Flex>
							<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
								<Image
									src='/rjb.jpg'
									borderRadius={25}
									alt='r/Jailbreak'
									width={100}
									height={100}
								/>
								<Link href='https://discord.gg/jb' isExternal>
									<Text fontSize='sm' marginTop={3}>r/Jailbreak</Text>
								</Link>
							</Flex>
						</Flex>
						<Flex alignItems='center' gridGap={4} marginY={4} marginX={2}>
							<Flex justifyContent='center' alignItems='center' textAlign='center' columnGap={6} flexDir='column'>
								<Image
									src='/tweakreviewsdb.jpg'
									borderRadius={25}
									alt='TweakReviewsDB'
									width={100}
									height={100}
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
	)
}