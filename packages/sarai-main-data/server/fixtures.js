if (Main.find().count() === 0) {

	Main.insert({
		name: 'topHeader',
		message: 'ENSO-Neutral Condition',
		href: 'http://www.pagasa.dost.gov.ph/index.php/climate/climate-advisories',
		searchText: 'How can we help you?',
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
	      	name: 'About Us',
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
	      			href: '/weather-monitoring',
	      			rank: 2
	      		},
	      		{
	      			name: 'Crop Production Area',
	      			href: '/crop-production-area',
	      			rank: 3
	      		},
	      		{
	      			name: 'Normalized Difference Vegetation Index (NDVI)',
	      			href: '/ndvi',
	      			rank: 4
	      		},
	      		{
	      			name: 'Rainfall',
	      			href: '/rainfall',
	      			rank: 5
	      		},
	      		{
	      			name: 'Open Data',
	      			href: 'opendata.sarai.ph',
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
		name: 'banner',
		slides: [
			{
				image: '/homepage-slider/Project-SARAI.png',
				textPosition: 'left',
				title: 'PROJECT SARAI',
			    subTitle: 'Smarter Farmers, Smarter Agriculture.',
			    text: 'Search through the different SARAI technologies and systems to what, when, and where to plant',
			    buttonText: 'MORE',
			    buttonLink: ''
			},
			{
				image: '/homepage-slider/Real-Time-Monitoring.jpg',
				textPosition: 'right',
				title: 'REAL-TIME WEATHER MONITORING',
				subTitle: 'Guide your farming practices with weather data',
				text: 'Get information on previous weather patterns and current weather conditions through historical and current weather data.',
				buttonText: 'EXPLORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/Geo-mapping.png',
				textPosition: 'right',
				title: 'GEO-MAPPING, SENSORS AND REMOTE-SENSING',
				subTitle: 'Monitor your soil and crop condition by using SARAI maps',
				text: 'Explore SARAI maps and collected data from a distance to monitor soil and crop moisture, nutrient, vegetative stage, and factors affecting climate change.',
				buttonText: 'EXPLORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/Crop-Monitoring-and-Forecasting.jpg',
				textPosition: 'right',
				title: 'CROP MONITORING AND FORECASTING',
				subTitle: 'Plan your planting practices wisely for optimum yield',
				text: 'View the 30-day cumulative rainfall data and 10-day weather forecast in your area to know the right time to plant.',
				buttonText: 'EXPLORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/Smarter-Crop-Management.jpg',
				textPosition: 'right',
				title: 'SMARTER CROP MANAGEMENT',
				subTitle: 'Helping farmers to produce more with less',
				text: 'Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.',
				buttonText: 'KNOW MORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/MOBILE-APP.png',
				textPosition: 'right',
				title: 'SARAI MOBILE APP',
				subTitle: 'Agriculture alerts on-the-go',
				text: 'A mobile app where users can receive alerts via push notifications to mobile devices.',
				buttonText: 'CLICK HERE TO DOWNLOAD',
				buttonLink: 'https://build.phonegap.com/apps/1850892/install/HNYZJ_mtp4V4uSLkgvCK'
			},
			{
				image: '/homepage-slider/eskwela.png',
				textPosition: 'right',
				title: 'SARAI ESKWELA',
				subTitle: 'Knowledge sharing for smarter agriculture',
				text: 'Explore the training modules and information, education, and communication materials to guide you in your farming practice.',
				buttonText: 'CLICK HERE',
				buttonLink: ''
			}
		],
		enabled: true
	});

	Main.insert({
		name: 'footer',
		text: 'Project SARAI aims to develop a national crop forecasting and monitoring system for first six priority crops: rice, corn, banana, coconut, coffee, cacao.',
		img: 'http://sarai.ph/wp-content/uploads/2016/03/DOST_PCAARRD_UPLB.png',
		share: [
	        {
	            class_name: 'facebook',
	            href: 'https://www.facebook.com/projectsarai/',
	            img: '/footer-icons/fb.png'
	        },
	        {
	            class_name: 'twitter',
	            href: 'https://twitter.com/ProjectSARAI',
	            img: '/footer-icons/twitter.png'
	        },
	        {
	        	class_name: 'youtube',
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
	    		author:'Dr, Efren Galo',
	    		authorInfo: 'Professor, College of Agriculture, University of Eastern Philippines',
	    		testimony: 'Attending this activity (SARAI Training on pest and disease management for rice) is very important for increasing our knowledge especially sa new technologies and of course to increase our production in our province.'
	    	},
	    	{
	    		title: '',
	    		author:'Mr. Reynaldo Salamat',
	    		authorInfo: 'Chief Regional Crop Protection Center, Region VIII-DA',
	    		testimony: 'Malaki ang importansya nitong activity (SARAI Training on pest and disease management for rice) kasi we are now challenged by climate change. Alam natin na we have to be more resilient in terms of technology. We have to be more efficient in recycling our resources.'
	    	},
	    	{
		        title: '',
		        author: 'Mr. Ricky S. Dador',
		        authorInfo: 'Weather Observer, Dumangas Agromet Station',
		        testimony: 'Yung SARAI makakatulong sa Dumangas para mas makilala o mas maging successful itong aming climate feild school for Dumangas'
	    	},
	    		    	{
	    		title: '',
	    		author:'Mr. Eugenio D. Decastillo Jr.',
	    		authorInfo: 'Dumangas Municipal Agriculturist',
	    		testimony: 'With the help of UPLB SARAI, we hope to have a good partnership for the development of our climate field school and also for us to have a more improved extension approaches to our farmers and to also develop a very good module on the climate-related problems of our farmers and of course to improve productivity towards food security.'
	    	}
	    ],
	    enabled: true,
	    imgenabled: true
	});
}