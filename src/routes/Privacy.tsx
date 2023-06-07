import { Alert, Box, Container, Heading, Link, ListItem, Spacer, Text, UnorderedList } from '@chakra-ui/react'

export default function Privacy() {
	return (
		<Container maxWidth={1024} marginX='auto' paddingX={8}>
			<Heading
				fontWeight='bold'
				fontSize='3xl'
				textAlign='center'
			>
				Privacy Policy
			</Heading>
			<Heading
				fontWeight='normal'
				fontSize='md'
				textAlign='center'
				opacity={0.5}
				mt={2}
			>
				Last Updated: Friday, March 25, 2022 — Effective: Friday, April 1, 2022
			</Heading>
			<Alert status='warning' borderRadius='lg' textAlign='center' marginX='auto' p={8} my={8}>
				<Box>
					<Text>
						TLDR: Canister doesn't track any personal identifiying information (PII).
						This includes IP addresses, user agents, device identifiers, and more.
						If you have any privacy concerns or questions, please send an email to
						{' '}
						<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='mailto:support@canister.me'>
							support@canister.me
						</Link>
						.
					</Text>
				</Box>
			</Alert>
			<Box>
				<Text>
					This Privacy Policy explains how Aerum LLC and the Canister service collect, use, store, and protect your information through the Canister service and its officially supported integrations.
					The Canister service is owned and operated by Aerum LLC, a company with jurisdiction in the United States.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Information Intentions</Heading>
				<UnorderedList>
					<ListItem>
						Aerum LLC has no intention of storing any identifiable user information originating from the Canister service. Instead, stored data is obscurely anonymous and serves to aid the development, maintenance, and continued support of the Canister service.
					</ListItem>
					<ListItem>
						Aerum LLC has no intention of selling any of its obscurely anonymous information to third-party services.
					</ListItem>
					<ListItem>
						Aerum LLC will never give its official integrations or any third-party services access to information it has stored from the Canister service.
					</ListItem>
				</UnorderedList>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Collected Information</Heading>
				<Text>
					Aerum LLC collects obscurely anonymous information when a user interacts with the Canister service (either directly or through a service). Information may originate directly from the user or automated systems.
				</Text>
				<UnorderedList>
					<ListItem>
						<strong>Device Information</strong>: The Canister service automatically collects IP addresses, operating system information, browser information, and user information.
					</ListItem>
					<ListItem>
						<strong>Request Data</strong>: The Canister service collects user-supplied data from query requests made to the core service.
					</ListItem>
				</UnorderedList>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Information Usage</Heading>
				<Text>
					Aerum LLC does not use information from the Canister services on its other products and services.
				</Text>
				<UnorderedList>
					<ListItem>
						<strong>Provide the Service</strong>: Aerum LLC can provide a stable experience on the Canister service with the information it retains. Otherwise, many of the Canister service's search features will not function.
					</ListItem>
					<ListItem>
						<strong>Improve the Service</strong>: Aerum LLC utilizes data to improve the Canister service by introducing new features and fixing technical issues.
					</ListItem>
				</UnorderedList>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Information Storage and Protection</Heading>
				<Text>
					Aerum LLC is an American registered Limited Liability Corporation. Therefore, the Canister service is owned and mainly operated in the United States.
					Data centers operated by Google Cloud,
					{" "}
					<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='https://www.iso.org/standard/75106.html'>
						ISO 22301:2019
					</Link>
					{" "}
					certified, and located in the United States are responsible for storing all information acquired from users (logging and analytics data). User data never leaves the country and is encrypted with a private key only available to certain employees of Aerum LLC.
					Stateless systems that are a part of the Canister service operate within and outside the jurisdiction of the United States. Below is a list of
					{" "}
					<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='https://www.iso.org/standard/75106.html'>
						ISO 22301:2019
					</Link>
					{" "}
					certified Google Cloud data center locations utilized by the Canister service and the privacy regulations followed at each center:
					<UnorderedList>
						<ListItem>
							<strong>Zurich, Switzerland</strong>:
							{" "}
							<Link isExternal textDecor='underline' display='inline' href='https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/links/data-protection---switzerland.html'>
								Swiss Data Protection Act (DPA)
							</Link>
						</ListItem>
						<ListItem>
							<strong>Los Angeles, CA</strong>:
							{" "}
							<Link isExternal textDecor='underline' display='inline' href='https://oag.ca.gov/privacy/ccpa'>
								California Consumer Privacy Act (CCPA)
							</Link>
						</ListItem>
						<ListItem>
							<strong>Ashburn, VA</strong>:
							{" "}
							<Link isExternal textDecor='underline' display='inline' href='https://lis.virginia.gov/cgi-bin/legp604.exe?211+sum+SB1392'>
								Consumer Data Protection Act (VCDPA)
							</Link>
						</ListItem>
					</UnorderedList>
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Official Integrations and Third-Party Services</Heading>
				<Text>
					Aerum LLC works with numerous projects (both open and closed source) to integrate the Canister service into them and enrich the experience for users. Aerum LLC strictly audits these integrations abide by the Privacy Policy. Official integrations are a trusted extension of the Canister service and require the user to agree to this Privacy Policy.
					Due to the open nature of the Canister service, third-party services may easily incorporate Canister into their systems. However, Aerum LLC does not audit these services, and these services may have separate data collection systems.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Data Control</Heading>
				<Text>
					Since data is obscurely anonymous, it is not possible to request the data associated with a user. Data deletion requests are also not possible as there is no way to associate data with the user on the deletion request (IP addresses are unviable).

					If you have any questions or concerns about this policy, please email
					{" "}
					<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='mailto:support@canister.me'>
						support@canister.me
					</Link>
					{" "}.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Policy Updates</Heading>
				<Text>
					A change in the last updated date or effective date signifies changes in the Privacy Policy.
				</Text>
			</Box>
		</Container>
	)
}
