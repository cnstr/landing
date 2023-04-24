import { Alert, Container, Heading, Link, Text, Box, Spacer, Code } from '@chakra-ui/react'

export default function V1EOL() {
	return (
		<Container maxWidth={1024} marginX='auto' paddingX={8}>
			<Heading
				fontWeight='bold'
				fontSize='3xl'
				textAlign='center'
			>
				Sunsetting Canister API v1
			</Heading>
			<Heading
				fontWeight='normal'
				fontSize='md'
				textAlign='center'
				opacity={0.5}
				mt={2}
			>
				April 24, 2023 — Aarnav Tale
			</Heading>
			<Alert status='warning' borderRadius='lg' textAlign='center' marginX='auto' p={8} my={8}>
				<Box>
					<Text>
						As of April 24, 2023, the Canister API v1 will be sunsetted and access to the API will become restricted. Please migrate to the latest version of the API in order to continue querying for data on Canister. Please refer to the
						{' '}
						<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='https://docs.canister.me'>
							documentation
						</Link>
						{' '}
						for instructions on how to migrate away. If you have any concerns or questions, please send an email to
						{' '}
						<Link isExternal fontWeight='bold' textDecor='underline' display='inline' href='mailto:support@canister.me'>
							support@canister.me
						</Link>
						.
					</Text>
				</Box>
			</Alert>
			<Box>
				<Heading fontSize='xl' marginBottom={2}>Hasty Origins</Heading>
				<Text>
					The first iteration of Canister was one of the messiest platforms ever concieved.
					It all started when a developer of Sileo wanted to integrate an API for search results.
					They were actually looking to integrate an existing search API from a competitor, but I told them to hold off for a few hours because I had a better solution.
					With that, I hastily started to build a search API that would be able to search across multiple repositories and return results in a standardized format.
				</Text>
				<Spacer height={8} />
				<Text>
					After a few hours and many cups of coffee, I had written something that worked.
					The code was terrible, but it worked and I was able to get the developer of Sileo to integrate it.
					I quickly deployed the code to production, knowing that I would spend the next few days cleaning it up.
					The original code was written in TypeScript on Node.js, and lacked many features for the sake of a quick release.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Unstable Platform</Heading>
				<Text>
					Less than a week into the project, I already realized that Canister had a massive problem.
					The services that update data from repositories was running in the same process as the API.
					This added an unnecessary amount of load to the API, and made it difficult to scale.
					To make matters worse, the indexing system had a massive amount of memory leaks and JIT optimization failures.
					In the early days, the Canister process would idle at around 2-4GB of RAM and would crash every few hours.
				</Text>
				<Spacer height={8} />
				<Text>
					I knew that I had to split the indexing and API services into separate processes.
					This long-term idea brought about the origins of Canister v2, which was a complete rewrite of the platform.
					Over the next few months, I spent half of my time heavily optimizing the v1 API to add missing features, handle the massive spike in traffic,
					and improve the reliability and accuracy of the repository indexing system. I also startex exploring the proposed v2 rewrite in C++ and started
					writing essential components like the repository parser and the database layer.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>Reaching v2</Heading>
				<Text>
					As I continued to work on Canister, I started to realize that the v2 rewrite was going to take a lot longer than I had anticipated.
					C++ led to the destruction of DX and I was wasting a lot of time trying to write raw SQL queries and deal with pointers.
					In the end, I ultimately decided that v2 would still be TypeScript on Node.js, but with a much more optimized architecture.
					By the middle of 2022, more than a year after the initial release of Canister, I had finally finished the v2 rewrite.
					The new architecture allowed me to scale the API and reduce API memory usage down to around 200mb.
					The indexing system ran as a short term job every hour, and would spike up to nearly 700mb of RAM.
					Not great, but a massive improvement over the original v1 API, and manageable because it only ran for about 20 minutes every hour.
				</Text>
				<Spacer height={8} />
				<Text>
					With the v2 rewrite complete, I was finally able to focus on adding new features to Canister.
					I began automating a lot of the tedious tasks, like documentation via OpenAPI and the deployment process.
					I also moved Canister to Kubernetes, allowing me to dynamically scale the API based on traffic.
					Canister v1 continued to run in production, but was slowed down to reduce its memory usage.
					I announced that the v1 API would be sunsetted in 2023, and that all new features would be added to v2.
				</Text>
				<Spacer height={8} />
				<Text>
					I thought everything was going to be smooth going forward, but I was wrong.
					The heavily reduced memory-footprint of the v2 API, coupled with massive traffic increases, led me to change my expectations.
					3 instances of my API were running in production, and I was concerned about the memory usage of each instance.
					Ultimately, I caved and decided to rewrite the API in Rust, finally committing to native code.
					I had been wanting to learn Rust for a while, and this was the perfect opportunity.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>The Rust Rewrite</Heading>
				<Text>
					The Rust rewrite was a massive undertaking, but I completed it at a very rapid pace.
					I was able to rewrite and test the entire API in less than 2 weeks, deploying it into production in early 2023.
					The new API utilized significantly less memory, peaking at around 100mb of RAM, and averaging around 25mb.
					Before I rewrote the indexing system, I built <Code>averter</Code>, a tool that redirected v1 API requests to v2.
					This allowed me to finally tear down the v1 API for good, allowing me to significantly reduce my server costs.
				</Text>
				<Spacer height={8} />
				<Heading fontSize='xl' marginBottom={2}>The Future</Heading>
				<Text>
					Currently, the indexing system is being converted to Rust as well.
					Instead of a full rewrite, I opted to write code in Rust and call it from Node.js via <Code>napi-rs</Code>.
					This allowed me to utilize the native module support of Node.js and significantly reduce the memory usage of the indexing system.
					The indexing system is approximately 65% Rust, and the peak memory usage has been reduced to around 300mb.
				</Text>
				<Spacer height={8} />
				<Text>
					Going forward, I'm going to continue optimizing Canister and adding new features.
					Many huge features are currently in-progress, and will be announced later this year.
					I never anticipated the massive growth and adoption of Canister, and I'm excited to see what the future holds.
					Thank you for all of your support and feedback!
				</Text>
			</Box>
		</Container >
	)
}
