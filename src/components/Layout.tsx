import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Box h='100vh' w='100vw' overflowY='initial' overflowX='hidden'>
				<Box as='header' position='fixed' w='100vw' backdropFilter='blur(10px)' px={4}>
					<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
						<Link as={RouterLink} to='/'>
							<Flex alignItems={'center'} textAlign={'end'} px={2}>
								<Image src='/canister.svg' h={10} w='auto' mr={1} />
								<Heading fontSize='xl'>Canister</Heading>
							</Flex>
						</Link>
					</Flex>
				</Box>
				<Box mt={24}>
					{children}
				</Box>
				<Box m={8}>
					<Flex justifyContent='center' alignItems='center' flexDir='column'>
						<Flex columnGap={4} opacity={0.5} fontSize='xs' mb={2}>
							<Link as={RouterLink} to='/privacy'>
								Privacy Policy
							</Link>
							<Link href='https://github.com/cnstr'>
								GitHub
							</Link>
							<Link href='https://twitter.com/aarnavtale'>
								Twitter
							</Link>
						</Flex>
						<Text fontSize='sm'>
							{'Copyright © '}{new Date().getFullYear()}{', '}
							<Link href='https://aerum.co' isExternal>
								Aerum LLC
							</Link>
						</Text>
						<Flex justifyContent='center' alignItems='center'>
							<Image width={{ base: 25, lg: 50 }} src='/canister.svg' />
							×
							<Image width={{ base: 25, lg: 50 }} src='/aerum.svg' />
						</Flex>
					</Flex>
				</Box>
			</Box >
		</>
	)
}
