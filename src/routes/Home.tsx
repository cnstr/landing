import { Box, Container, Flex, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import Analytics from 'components/Analytics'
import Hero from 'components/Hero'

export default function Home() {
	return (
		<Container maxWidth={1024} marginX='auto' paddingX={8}>
			<Hero />
			<Spacer margin={8} />
			<Flex gridGap={6} flexDir='column' alignItems='center'>
				<Analytics />
				<Box maxW='2xl'>
					<Link>
						<Heading fontSize='xl' marginBottom={2}>What is Canister?</Heading>
					</Link>
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
		</Container>
	)
}
