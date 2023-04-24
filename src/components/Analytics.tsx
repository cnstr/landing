import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IoPerson, IoCloud, IoDownload } from 'react-icons/io5'

export default function Analytics() {
	const [gb, setGb] = useState('...')
	const [views, setViews] = useState('...')
	const [requests, setRequests] = useState('...')

	useEffect(() => {
		if (gb !== '...' && views !== '...' && requests !== '...') {
			return
		}

		fetch('https://api.tale.me/v1/analytics/canister')
			.then((res) => res.json())
			.then((json) => {
				setGb((json.totalGb / 10).toFixed(2).toLocaleString())
				setViews(json.pageViews.toLocaleString('en-US'))
				setRequests(json.requests.toLocaleString('en-US'))
			}).catch(e => console.log(e))
	})

	return (
		<Box maxW='2xl'>
			<Flex justifyContent='center' flexDir={{ base: 'column', md: 'row' }} rowGap={1} columnGap={32}>
				<Flex flexDir={{ base: 'row', md: 'column' }} alignItems='center' justifyContent='flex-start' columnGap={1}>
					<Icon
						boxSize={{ base: 6, md: 12 }}
						as={IoPerson}
						mb={{ base: 0, md: 2 }}
						mr={{ base: 2, md: 0 }}
					/>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						my={0}
					>
						{views}
					</Text>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						mt={0}
						mb={{ base: 0, md: 2 }}
						ml={{ base: 2, md: 0 }}
					>
						Visitors
					</Text>
				</Flex>
				<Flex flexDir={{ base: 'row', md: 'column' }} alignItems='center' justifyContent='flex-start' columnGap={1}>
					<Icon
						boxSize={{ base: 6, md: 12 }}
						as={IoDownload}
						mb={{ base: 0, md: 2 }}
						mr={{ base: 2, md: 0 }}
					/>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						my={0}
					>
						{requests}
					</Text>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						mt={0}
						mb={{ base: 0, md: 2 }}
						ml={{ base: 2, md: 0 }}
					>
						Requests
					</Text>
				</Flex>
				<Flex flexDir={{ base: 'row', md: 'column' }} alignItems='center' justifyContent='flex-start' columnGap={1}>
					<Icon
						boxSize={{ base: 6, md: 12 }}
						as={IoCloud}
						mb={{ base: 0, md: 2 }}
						mr={{ base: 2, md: 0 }}
					/>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						my={0}
					>
						{gb}
					</Text>
					<Text
						maxW='xs'
						fontSize={{ base: 'xl', md: '2xl' }}
						fontFamily='Sora, sans-serif'
						textAlign='center'
						mt={0}
						mb={{ base: 0, md: 2 }}
						ml={{ base: 2, md: 0 }}
					>
						Gigabytes
					</Text>
				</Flex>
			</Flex>
			<Text fontSize={{ base: 'xl', md: '2xl' }} textAlign='center' opacity={0.6} marginY={2}>served in the past month</Text>
		</Box>
	)
}
