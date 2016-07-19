if (About.find().count() === 0) {

	About.insert({
		name: 'topHeader',
		message: 'We are on a Mission',
		searchText: 'Giving farmers access to real-time knowledge for a new edge on making smarter decisions.',
		enabled: true
	});

	About.insert({
		name: 'mainHeader',
		img: '/sarai.png',
	    links: [
	      {
	      	name: 'Home',
	      	href: '/',
	      	links: [],
	      	id: 'home-link',
	      	withsublinks: false
	      },
	      {
	      	name: 'About Us',
	      	href: '/about-us',
	      	links: [],
	      	id: 'about-us-link',
	      	withsublinks: false
	      },
	      {
	      	name: 'Explore',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Suitability Maps',
	      			href: 'http://159.203.253.36:8081/web/'
	      		},
	      		{
	      			name: 'Weather Monitoring',
	      			href: '/explore/weather-monitoring'
	      		},
	      		{
	      			name: 'Crop Production Area',
	      			href: '/explore/crop-production-area'
	      		},
	      		{
	      			name: 'Normalized Difference Vegetation Index (NDVI)',
	      			href: '/explore/ndvi'
	      		},
	      		{
	      			name: 'Rainfall',
	      			href: '/explore/rainfall'
	      		},
	      		{
	      			name: 'Open Data',
	      			href: 'http://202.92.144.42/'
	      		}
	      	],
	      	id: 'explore-link',
	      	withsublinks: true
	      },
	      {
	      	name: 'Planning Dates',
	      	href: '',
	      	links: [],
	      	id: 'planning-dates-link',
	      	withsublinks: false
	      },
	      {
	      	name: 'DSS',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Corn Nutrient Expert',
	      			href: '/dss/corn-nutrient-expert'
	      		}
	      	],
	      	id: 'dss-link',
	      	withsublinks: true
	      },
	      {
	      	name: 'Get Involved',
	      	href: '',
	      	links: [
	      		{
	      			name: 'Contact Us',
	      			href: '/get-involved/contact'
	      		},
	      		{
	      			name: 'Submit a Story',
	      			href: '/get-involved/contact'
	      		},
	      		{
	      			name: 'Join the Discussion',
	      			href: 'https://groups.google.com/forum/#!forum/project-sarai-knowledge-hub'
	      		}
	      	],
	      	id: 'get-involved-link',
	      	withsublinks: true
	      }
	    ],
	    buttonText: 'BETA VERSION',
	    buttonEnabled: true,
	    enabled: true
	});

	About.insert({
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

	About.insert({
		name: 'contact-us',
		number: '+63 (049) 536 3080, 2836',
		mailname: 'sarai@uplb.edu.ph',
		mailhref: 'mailto:http://sarai@uplb.edu.ph',
		location: 'SESAM UPLB, College, Laguna Philippines 4031',
		businesshours: 'Mon – Fri : 8:00am to 5:00pm Saturday and Sunday Closed.',
		enabled: true
	});

	About.insert({
		name: 'banner',
		banners: [
			{
				img: '/samplepics/sarai.jpg',
				align: 'left',
				title: 'About Project SARAI',
			    text: 'Smarter Farmers, Smarter Agriculture.',
			    subtext: 'We are on a Mission. >> Giving farmers access to real-time knowledge for a new edge on making smarter decisions.',
			    description: 'About Us',
			    buttonText: 'More'
			}
		],
		enabled: true
	});
	

	About.insert({
		name: 'videos',
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


	About.insert({
		name: 'origin',
		title: 'Our Story',
	    description: '<p>So here’s a story of how the team came up with SARAI. It did not come easy, just as how other ideas did not come over night, the team had to go through to numerous discussions and brainstorming sessions before they reach the eureka moment. Sarai was Abraham’s wife, and she was the first character in the Bible who was said to be barren. But then later on, God chose them to be the forefathers of the nation of Israel. It was a miracle, of how Sarai was able to conceive. So the team thought it apt to adopt the name, thus the name Project SARAI came about. Project SARAI hopes to bring about development in our agriculture sector by providing our farmers with smarter options. Also, Project SARAI hopes to help in making a more resilient and a more proactive agriculture sector by using state-of-the-art technologies, and providing near real-time crop advisories. It is a long work in progress, but with the sustained partnership with different State Universities and Colleges (SUCs) nationwide, different government agencies, and other institutions, the solutions are well along the way to reaching the farmers and other stakeholders.</p>',
		img: '/samplepics/sarai2.jpg',
		img2: '/services/sarai-eskwela.jpg',
	    enabled: true,
	    buttonEnabled: true
	});

	
	About.insert({
		name: 'projects',
		title: '<h2>The Projects</h2>',
		img: '/services/2.jpg',
		img1: '/services/3.jpg',
		text1: '<p>Project 1. Model Development and Crop Forecasting</p>',
		subtext1:' <p>Project 1 aims to develop and evaluate crop models to launch a crop forecasting platform available for the entire country for the six priority crops. In order to achieve these, the project is composed of the following research areas:</p>',
		description1:'<p>– Climate risk assessment in key production areas<br>– Validated crop models for priority crops<br>– Integrated Crop Management System (ICMS)<br>– Optimal nutrient management<br>– Crop advisories on crop protection and crop forecasts<br>– Crop early warning systems (EWS)<br>– Adaptive planting calendar<br>– Database, validated crop models and forecasts per crop</p>',
				

		      	text2: '<p>Project 2: Environmental Characterization and Development of Integrated Crop Management</p>',
		        subtext2:'<p>Project 2 aims to provide the near real-time, empirical field data as inputs to the crop models simulated by Project 1. It also aims to provide site-specific nutrient management advisories for the perennials.</p>',
				description2:'<br>– Updated land use and crop suitability maps<br>– Real time and edaphic data from Automatic Weather Stations (AWS) and sensors<br>– Integrated Crop Management System (ICMS)<br>– Vulnerability Studies</p>',

		      	text3: '<p>Project 3: Sarai Knowledge Portal</p>',
		        subtext3:'<p>Project 3 is the online infrastructure of Project SARAI which serves as the database, and the online go-to site of various stakeholders.</p>',
				description3:'<p>– Database platform for Project SARAI outputs<br>– Crop advisories, crop forecasts, crop EWS<br>– Information/learning tools<br>– Planting calendar, ICM, and integrated water management IPM<p>',

		      	text4: '<p>Project 4: Capacity and Knowledge-Building</p>',
		        subtext4:'<p>Project 4 makes sure that the system and the outputs of the research program are shared with the stakeholders through conducting technical trainings, seminars, workshops; developing training modules; and designing various IEC materials.</p>',
				description4:'<p>– Analyzed training needs<br>– New and complementary training tools and activities<br>– Conduct of trainings, IEC ad joint learning activities on smarter farming techniques, ICM, DSS, AWS/Sensors</p>',

		      	text5: 'Project 5: Sarai Mainstreaming',
		        subtext5:'Project 5 is in charge of the formulation of science-based recommendations for the agricultural sector. It also makes sure that the partner SUCs are committed into contributing to the consortium, and that the relevant government agencies will take part in building and improving the system.',
				description5:'<p>– Identification of policy issues and formulation of policy papers<br>– Publication of research results<br>– Organization of planning and scientific meetings<br>– Establish: Crop-climate forecasting and modelling laboratory<br>– Build consortium to ensure sustainability</p>',


	    enabled: true
	});



	About.insert({
		name: 'leaders',
		title: 'Project Leaders',
	    author1: 'Dr. Ma. Victoria O. Espaldon',
	    subtext1: 'Program Leader',
	    img1: '/samplepics/1.jpg',
		        author2: 'Dr. Felino P. Lansigan',
			    subtext2: 'Project 1 Leader',
			    img2: '/samplepics/2.jpg',

		        author3: 'Dr. Artemio M. Salazar',
			    subtext3: 'Project 2 Leader',
			    img3: '/samplepics/3.jpg',

		        author4: 'Prof. Concepcion L. Khan',
			    subtext4: 'Project 3 Leader',
			    img4: '/samplepics/4.jpg',

		        author5: 'Dr. Decibel V. Faustino-Eslava',
			    subtext5: 'Project 4 Leader',
			    img5: '/samplepics/5.jpg',
	   
	    enabled: true
	});


	About.insert({
			name: 'partners',
			title: 'Partner Institutions',
			partners: [
		      {
			        text: 'Academic Institutions',
			        subtext:' The program has partnered with the following academic institutions for the setting up of experiments, installation of equipment, and gathering of real-time field data. Moreover, the program envisions each SUC as an active member of the consortium which will carry out the system and continue releasing the advisories in their respective regions.',
					st1:'– Isabela State University (ISU)',
					st2:'– Central Luzon State University (CLSU)',
					st3:'– Bicol University (BU)',
					st4:'– Mindoro State College of Agriculture and Technology (MinSCAT)',
					st5:'– Western Philippines University (WPU)',
					st6:'– West Visayas State University (WVSU)',
					st7:'– Cebu Technological University (CTU)',
					st8:'– Central Mindanao University (CMU)',
					st9:'– Southern Philippines Agri-Business and Marine and Aquatic School of Technology (SPAMAST)',
					st10:'– Cavite State University (CavSU)',
					st11:'– Misamis Oriental State College of Agriculture and Technology (MOSCAT)',
					st12:'– University of the Philippines Diliman – Institute of Environmental Science and'

		      },

		  	  {
			      	text: 'Government Agencies',
			        subtext:' The mandated government agencies provide the necessary data, and networks for the program. They also help in directing the program in terms of what agencies to tap for the easier spread and adoption of the system.',
					st1:'– Philippine Coconut Authority (PCA) – DA-Quezon Agricultural Experimentation Station (DA-QAES)',
					st2:'– PhilRICE',
					st3:'– Philippine Atmospheric, Geophysical, & Astronomical Services Administration (PAGASA)',
					st4:'– Bureau of Soils and Water Management (BSWM)',
					st5:'– Advanced Science Technology Institute (ASTI)',
					st6:'– LGU – Dumangas, Iloilo',
					st7:'–  LGU – Wao, Lanao Del Sur'

			  },

			  {
			      	text: 'Private Institutions',
			        subtext:' Some of these private institutions such as SMART, IBM, and IPNI have provided some services for the program for app development, and use of existing technologies. The other institutions serve as the program’s collaborators for experimental set up, and data gathering.',
					st1:'– PPhilMAIZE',
					st2:'– International Plant Nutrition Institute (IPNI)',
					st3:'– SMART Communications, Inc. (SMART)',
					st4:'– IBM Philippines, Inc. (IBM)',
					st5:'– Nestle Lipa Integrated Coffee Research Station (Nestle) (NLICC)',
					st6:'– World Agroforestry Center (ICRAF)',
					st7:'– Puentespina Farms'
			  },

			  {
			      	text: 'Cooperative',
			        subtext:'TAMCO is one of the program’s partner for the research activities on coffee.',
			  },
		      
		    ],
		    enabled: true
	});



}