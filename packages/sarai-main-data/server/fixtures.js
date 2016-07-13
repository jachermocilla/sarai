if (Main.find().count() === 0) {

	Main.insert({
		name: 'topHeader',
		message: 'La Nina Watch Issued',
		href: '',
		searchText: 'How can we help you',
		enabled: true
	});

	Main.insert({
		name: 'mainHeader',
		img: '/sarai.png',
	    links: [
	      {
	      	name: 'Home',
	      	href: '/',
	      	links: [],
	      	id: 'home-link',
	      	withsublinks: false,
	      	rank: 1
	      },
	      {
	      	name: 'about-us',
	      	href: '/about-us',
	      	links: [],
	      	id: 'about-us-link',
	      	withsublinks: false,
	      	rank: 2
	      },
	      {
	      	name: 'Explore',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Suitability Maps',
	      			href: 'http://159.203.253.36:8081/web/',
	      			rank: 1
	      		},
	      		{
	      			name: 'Weather Monitoring',
	      			href: '/explore/weather-monitoring',
	      			rank: 2
	      		},
	      		{
	      			name: 'Crop Production Area',
	      			href: '/explore/crop-production-area',
	      			rank: 3
	      		},
	      		{
	      			name: 'Normalized Difference Vegetation Index (NDVI)',
	      			href: '/explore/ndvi',
	      			rank: 4
	      		},
	      		{
	      			name: 'Rainfall',
	      			href: '/explore/rainfall',
	      			rank: 5
	      		},
	      		{
	      			name: 'Open Data',
	      			href: 'http://202.92.144.42/',
	      			rank: 6
	      		}
	      	],
	      	id: 'explore-link',
	      	withsublinks: true,
	      	rank: 3
	      },
	      {
	      	name: 'Planning Dates',
	      	href: '',
	      	links: [],
	      	id: 'planning-dates-link',
	      	withsublinks: false,
	      	rank: 4
	      },
	      {
	      	name: 'DSS',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Corn Nutrient Expert',
	      			href: '/dss/corn-nutrient-expert',
	      			rank: 1
	      		}
	      	],
	      	id: 'dss-link',
	      	withsublinks: true,
	      	rank: 5
	      },
	      {
	      	name: 'Get Involved',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Contact Us',
	      			href: '/get-involved/contact',
	      			rank: 1
	      		},
	      		{
	      			name: 'Submit a Story',
	      			href: '/get-involved/contact',
	      			rank: 2
	      		},
	      		{
	      			name: 'Join the Discussion',
	      			href: 'https://groups.google.com/forum/#!forum/project-sarai-knowledge-hub',
	      			rank: 3
	      		}
	      	],
	      	id: 'get-involved-link',
	      	withsublinks: true,
	      	rank: 6
	      }
	    ],
	    buttonText: 'BETA VERSION',
	    buttonEnabled: true,
	    enabled: true
	});

	Main.insert({
		name: 'footer',
		text: 'Project SARAI aims to develop a national crop forecasting and monitoring system for first six priority crops: rice, corn, banana, coconut, coffee, cacao.',
		img: 'http://sarai.ph/wp-content/uploads/2016/03/DOST_PCAARRD_UPLB.png',
		share: [
	        {
	            class_name: 'fb',
	            href: 'https://www.facebook.com/projectsarai/',
	            img: '/footer-icons/fb.png'
	        },
	        {
	            class_name: 'twt',
	            href: 'https://twitter.com/ProjectSARAI',
	            img: '/footer-icons/twitter.png'
	        },
	        {
	        	class_name: 'yt',
	        	href: 'https://www.youtube.com/channel/UCJtzNfVmoqFZGCF326VaTZw',
	        	img: '/footer-icons/youtube.png'
	        }
        ],
        enabled: true
	});

	Main.insert({
		name: 'contact-us',
		number: '+63 (049) 536 3080, 2836',
		mailname: 'sarai@uplb.edu.ph',
		mailhref: 'mailto:http://sarai@uplb.edu.ph',
		location: 'SESAM UPLB, College, Laguna Philippines 4031',
		businesshours: 'Mon – Fri : 8:00am to 5:00pm Saturday and Sunday Closed.',
		enabled: true
	});

	Main.insert({
		name: 'banner',
		banners: [
			{
				img: '/homepage-slider/Project-SARAI.png',
				position: 'lower-left',
				title: 'About Project SARAI',
		    text: 'Smarter Farmers, Smarter Agriculture.',
		    subtext: 'Search through the different SARAI technologies and systems to what, when, and where to plant',
		    buttonText: 'More',
		    buttonLink: '/'
			}
		],
		enabled: true
	});

	Main.insert({
		name: 'crop-list',
		crops: [
	      {
	        href: '/rice',
	        text: 'RICE',
	        img: '/crops-flat-icons/rice.png'
	      },
	      {
	        href: '/corn',
	        text: 'CORN',
	        img: '/crops-flat-icons/corn.png'
	      },
	      {
	        href: '/banana',
	        text: 'BANANA',
	        img: '/crops-flat-icons/banana.png'
	      },
	      {
	        href: '/coconut',
	        text: 'COCONUT',
	        img: '/crops-flat-icons/coconut.png'
	      },
	      {
	        href: '/coffee',
	        text: 'COFFEE',
	        img: '/crops-flat-icons/coffee.png'
	      },
	      {
	        href: '/cacao',
	        text: 'CACAO',
	        img: '/crops-flat-icons/cacao.png'
	      }
	    ],
	    enabled: true
	});

	Main.insert({
		name: 'services',
	    title: 'Our Projects',
	    description: 'Project SARAI, which is on anchored on precision agriculture, uses advances on technology to know what, when, and where to plant.',
	    subtext: 'Field photos from PVeluz',
	    enabled: true,
	    buttonEnabled: true
	});

	Main.insert({
		name: 'reports',
		text: 'Get our reports on events related to rice, corn, banana, coconut, coffee, and cacao.',
		reports: [
	      {
	        href: 'http://sarai.ph/wp-content/uploads/2016/03/Assessment_basis_Project-SARAI.pdf',
	        label: 'View Report',
	        img: '/samplepics/Lando_cover.png'
	      },
	      {
	        href: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
	        label: 'View Report',
	        img: '/samplepics/Pest-Risk-Map-Armyworm-copy_2.png'
	      }
	    ],
	    enabled: true
	});

	Main.insert({
		name: 'blogs',
		title: 'From the Blog',
		text: 'Read articles & express your opinions on environment',
    	subtext: '',
    	enabled: true
	});

	Main.insert({
		name: 'testimonials',
		title: 'What People Say…',
	    mainTestimonial: 'SARAI aims to harness state-of-the-art science and technology to empower Filipino farmers.',
	    subtext: '',
	    author: 'Dr. Ma. Victoria O. Espaldon',
	    img: '/samplepics/MVOE-2.jpg',
	    testimonials: [
	    	{
		        title: '',
		        author: 'Mr. Ricky S. Dador',
		        authorInfo: 'Weather Observer, Dumangas Agromet Station',
		        subtext: '',
		        testimony: 'Yung SARAI makakatulong sa Dumangas para mas makilala o mas maging successful itong aming climate feild school for Dumangas',
		        id: 'quotes1-link'
	    	}
	    ],
	    enabled: true
	});
}