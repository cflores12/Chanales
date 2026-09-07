export interface NavItem {
	href: `#${string}`;
	label: string;
	shortLabel: string;
}

export interface Profile {
	name: string;
	initials: string;
	role: string;
	headerNote: readonly string[];
	heroGreeting: string;
	heroDescription: string;
	email: string;
	linkedinUrl: string;
	githubUrl: string;
	about: readonly string[];
	portraitAlt: string;
}

export interface ExperienceItem {
	date: string;
	role: string;
	company: string;
	highlights: readonly string[];
}

export interface ProjectItem {
	category: string;
	date: string;
	title: string;
	description: string;
	link?: {
		label: string;
		href: string;
	};
	status?: {
		label: string;
		detail: string;
	};
}

export const navigation: readonly NavItem[] = [
	{ href: '#home', label: '01. Home', shortLabel: 'Home' },
	{ href: '#about', label: '02. About', shortLabel: 'About' },
	{ href: '#experience', label: '03. Experience', shortLabel: 'Experience' },
	{ href: '#projects', label: '04. Projects', shortLabel: 'Projects' },
];

export const profile: Profile = {
	name: 'Chanales Flores',
	initials: 'CF',
	role: 'Software Development Engineer 2',
	headerNote: ['Building a better web', 'one commit at a time.'],
	heroGreeting: 'Hey, Chanales here.',
	heroDescription:
		'Software Engineer by day, curious builder by night. Based in New Jersey, I work on internal applications for retail operations while spending my free time exploring different interests, experimenting with new technology, blogging, making art, and building small projects just to see where an idea can go.',
	email: 'florescareers28@gmail.com',
	linkedinUrl: 'https://www.linkedin.com/in/chanales-flores/',
	githubUrl: 'https://github.com/cflores12',
	about: [
		'At Spencer’s & Spirit, I build and maintain internal applications that help support retail operations across our stores. One of my recent projects was a web application for ordering supplies across more than 1,500 Spirit Halloween locations, used daily by over 600 field managers.',
		'More recently, I’ve also been exploring AI integrations that use data from our internal applications to improve workflows, surface useful insights, and make retail operations more efficient.',
	],
	portraitAlt: 'Chanales Flores standing in Akihabara, Tokyo',
};

export const techStack: readonly string[] = [
	'C#',
	'Blazor',
	'.NET MAUI',
	'JavaScript',
	'React',
	'Playwright',
	'Python',
	'SQL',
];

export const experience: readonly ExperienceItem[] = [
	{
		date: 'April 2025 – Present',
		role: 'Software Development Engineer 2',
		company: "Spencer's & Spirit",
		highlights: [
			'Architected and launched a cloud-native supply-ordering application and supporting REST APIs to process and route fixture, signage, and supply requests across more than 1,500 retail locations.',
			'Built a pipeline that synchronized shipment and container data across store-opening workflows, reducing data latency by 80% and generating more than $300K in annual savings.',
			'Redesigned an Azure-hosted compliance and audit application and led its migration from Razor and JavaScript to Blazor, reducing technical debt by 60% and increasing development velocity by 40%.',
			'Led root-cause analysis and remediation for two major production incidents affecting more than 1,000 users, restoring mileage processing and authentication access while implementing long-term preventive fixes.',
		],
	},
	{
		date: 'November 2022 – March 2025',
		role: 'Software Development Engineer 1',
		company: "Spencer's & Spirit",
		highlights: [
			'Modernized a legacy inventory pipeline connecting multiple warehouse systems with the order-management platform, improving reliability during warehouse transitions.',
			'Built a scheduled synchronization service that coordinated vendor and internal scheduling across more than 1,500 locations, improving operational visibility, reducing manual coordination, and saving more than $100K annually.',
		],
	},
	{
		date: 'January 2022 – May 2022',
		role: 'Software Development Engineer Intern',
		company: "Spencer's & Spirit",
		highlights: [
			'Built and deployed an internal web application that streamlined e-commerce workflows and improved daily operational efficiency.',
		],
	},
	{
		date: 'June 2021 – August 2021',
		role: 'Software Engineer Intern',
		company: 'UPS',
		highlights: [
			'Built a proof of concept for adding alerting capabilities to a web application that tracked UPS Premier healthcare packages across scanning and sensor systems.',
			'Created Power BI reports that helped corporate users analyze healthcare package data and gain greater operational insight.',
			'Won the Crowd Favorite award at the UPS Summer Hackathon.',
		],
	},
	{
		date: 'January 2021 – May 2021',
		role: 'Software Engineer Intern',
		company: 'Viocare',
		highlights: [
			'Designed relational databases and migration processes to integrate USDA nutrition data into dietary research applications.',
			'Helped decompose a monolithic application into microservices for food data, nutrition analysis, and dietary scoring, improving scalability.',
			'Developed REST APIs that delivered nutrition analyses, dietary scores, and reports used to provide users with dietary feedback.',
		],
	},
	{
		date: 'September 2020 – December 2020',
		role: 'Software Engineer Intern',
		company: 'KAR Global (now OPENLANE)',
		highlights: [
			'Contributed to a web application supporting vehicle-shipping operations.',
			'Led the implementation of Playwright end-to-end test automation, improving application reliability and streamlining quality assurance.',
			'Helped modernize legacy Razor Pages by migrating front-end functionality to React.js.',
		],
	},
];

export const projects: readonly ProjectItem[] = [
	{
		category: 'Research',
		date: 'Spring 2019',
		title: 'Solar Electric Personal Aerial Vehicle',
		description:
			'Collected and analyzed data as part of a multidisciplinary team that built a small-scale proof of concept by integrating solar technology with a DJI drone. The research supported a broader concept for a solar-electric personal aerial vehicle and received an NJIT URI Phase 2 Student Seed Grant.',
		link: {
			label: 'View award',
			href: 'https://research.njit.edu/uri/spring-2019-student-seed-grant-winners',
		},
	},
	{
		category: 'Web Project',
		date: 'February 2020',
		title: 'Regional Business Conference Website',
		description:
			'As Technology Officer for the New Jersey Institute of Technology Residence Hall Association, I built a custom informational website for a regional business conference hosted by the organization.',
		status: {
			label: 'Archived project',
			detail: 'Original site offline',
		},
	},
];
