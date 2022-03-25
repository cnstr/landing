import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Analytics() {
	const [gb, setGb] = useState('...')
	const [views, setViews] = useState('...')
	const [requests, setRequests] = useState('...')

	useEffect(() => {
		fetch('https://api.tale.me/v1/analytics/canister')
			.then((res) => res.json())
			.then((json) => {
				setGb(json.totalBytes.toFixed(2).toLocaleString('en-US'))
				setViews(json.pageViews.toLocaleString('en-US'))
				setRequests(json.requests.toLocaleString('en-US'))
			}).catch(e => console.log(e))
	})

	return (
		<Box maxW='2xl'>
			<Flex columnGap={12} justifyContent='flex-end'>
				<Heading
					fontSize={{ base: '2xl', md: '3xl' }}
					fontFamily='mono'
					textAlign='center'
					marginBottom={2}
				>{views} Users</Heading>
				<Heading
					fontSize={{ base: '2xl', md: '3xl' }}
					fontFamily='mono'
					textAlign='center'
					marginBottom={2}
				>{requests} Requests</Heading>
				<Heading
					fontSize={{ base: '2xl', md: '3xl' }}
					fontFamily='mono'
					textAlign='center'
					marginBottom={2}
				>{gb} GB</Heading>
			</Flex>
			<Heading fontSize='2xl' textAlign='center' opacity={0.6} marginY={2}>served in the past month</Heading>
		</Box>
	)
}
