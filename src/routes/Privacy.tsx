import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { Container } from '@chakra-ui/react'

const markdown = `
# Canister Privacy Policy
*Last Updated: Friday, March 25, 2022* — *Effective: Friday, April 1, 2022*

This Privacy Policy explains how Aerum LLC and the Canister service collect, use, store, and protect your information through the Canister service and its officially supported integrations.

The Canister service is owned and operated by Aerum LLC, a company with jurisdiction in the United States.
If you have any questions about our policies, please email us at [support@aerum.co](mailto:support@aerum.co).

## Information Intentions
* Aerum LLC has no intention of storing any identifiable user information originating from the Canister service. Instead, stored data is obscurely anonymous and serves to aid the development, maintenance, and continued support of the Canister service.
* Aerum LLC has no intention of selling any of its obscurely anonymous information to third-party services.
* Aerum LLC will never give its official integrations or any third-party services access to information it has stored from the Canister service.

## Collected Information
Aerum LLC collects obscurely anonymous information when a user interacts with the Canister service (either directly or through a service). Information may originate directly from the user or automated systems.

* **Device Information:** The Canister service automatically collects IP addresses, operating system information, browser information, and user information.
* **Request Data:** The Canister service collects user-supplied data from query requests made to the core service.

## Information Usage
Aerum LLC does not use information from the Canister services on its other products and services.

* **Provide the Service:** Aerum LLC can provide a stable experience on the Canister service with the information it retains. Otherwise, many of the Canister service's search features will not function.
* **Improve the Service:** Aerum LLC utilizes data to improve the Canister service by introducing new features and fixing technical issues.

## Information Storage and Protection
Aerum LLC is an American registered Limited Liability Corporation. Therefore, the Canister service is owned and mainly operated in the United States.

Data centers operated by Google Cloud, [ISO 22301:2019](https://www.iso.org/standard/75106.html) certified, and located in the United States are responsible for storing all information acquired from users (logging and analytics data). User data never leaves the country and is encrypted with a private key only available to certain employees of Aerum LLC.

Stateless systems that are a part of the Canister service operate within and outside the jurisdiction of the United States. Below is a list of [ISO 22301:2019](https://www.iso.org/standard/75106.html) certified Google Cloud data center locations utilized by the Canister service and the privacy regulations followed at each center:

* **Singapore:** [Personal Data Protection Act (PDPA)](https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act)
* **Zurich, Switzerland:** [Swiss Data Protection Act (DPA)](https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/links/data-protection---switzerland.html)
* **Tokyo, Japan:** [Act on Protection of Personal Information (IPPA)](https://www.cas.go.jp/jp/seisaku/hourei/data/APPI.pdf)
* **Los Angeles, United States:** [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa)
* **Ashburn, United States:** [Consumer Data Protection Act (VCDPA)](https://lis.virginia.gov/cgi-bin/legp604.exe?211+sum+SB1392)

## Official Integrations and Third-Party Services
Aerum LLC works with numerous projects (both open and closed source) to integrate the Canister service into them and enrich the experience for users. Aerum LLC strictly audits these integrations abide by the Privacy Policy. Official integrations are a trusted extension of the Canister service and require the user to agree to this Privacy Policy.

Due to the open nature of the Canister service, third-party services may easily incorporate Canister into their systems. However, Aerum LLC does not audit these services, and these services may have separate data collection systems.

## Data Control
Since data is obscurely anonymous, it is not possible to request the data associated with a user. Data deletion requests are also not possible as there is no way to associate data with the user on the deletion request (IP addresses are unviable).

If you have any questions or concerns about this policy, please email [support@aerum.co](mailto:support@aerum.co).

## Policy Updates
A change in the last updated date or effective date signifies changes in the Privacy Policy.
`

export default function Privacy() {
	return (
		<Container maxWidth={1024} marginX='auto' paddingX={8}>
			<ReactMarkdown components={ChakraUIRenderer()}>
				{markdown}
			</ReactMarkdown>
		</Container>
	)
}
