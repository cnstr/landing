import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function Hero() {
	return (
		<Flex alignItems='center' textAlign={{ base: 'center', md: 'left' }} gridGap={4} flexDir={{ base: 'column-reverse', md: 'row' }}>
			<Box w={{ base: 'xs', md: '7xl' }}>
				<Heading
					fontWeight='bold'
					fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
					textAlign={{ base: 'center', md: 'left' }}
				>
					{'A powerful '}
					<Text display='inline' fontSize='inherit' color='messenger.500'>
						search engine
					</Text>
					{' created '}
					{' for '}
					<Text display='inline' fontSize='inherit' color='messenger.600'>
						software.
					</Text>
				</Heading>
				<Text my={4}>
					Canister let's you explore hundreds of thousands of programs across iOS and Linux software repositories.
				</Text>
				<Link isExternal href='https://docs.canister.me/'>
					<Button size='lg' variant='solid' colorScheme='messenger' mt={8}>Get Started</Button>
				</Link>
			</Box>
			<Box>
				<Image marginX='auto' width={{ sm: 1000, md: 1400, lg: 1800, xl: 2200 }} src='/search.svg' />
			</Box>
		</Flex>
	)
}
