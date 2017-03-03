if (Regions.find().count() === 0) {
	Regions.insert({
		region: "All",
		province: ["All"]
	});
	Regions.insert({
		region: "Negros Island Region (NIR)",
		province: ["All", "Negros Occidental","Negros Oriental"]
	});
	Regions.insert({
		region: "National Capital Region (NCR)",
		province: ["All", "Metropolitan Manila"]
	});
	Regions.insert({
		region: "Cordillera Administrative Region (CAR)",
		province: ["All", "Abra","Apayao","Benguet","Ifugao","Kalinga","Mountain Province"]
	});
	Regions.insert({
		region: "Region I: Ilocos Region",
		province: ["All", "Ilocos Norte","Ilocos Sur","La Union","Pangasinan"]
	});
	Regions.insert({
		region: "Region II: Cagayan Valley",
		province: ["All", "Batanes","Cagayan","Isabela","Nueva Vizcaya","Quirino"]
	});
	Regions.insert({
		region: "Region III: Central Luzon",
		province: ["All", "Aurora","Bataan","Bulacan","Nueva Ecija","Pampanga","Tarlac","Zambales"]
	});
	Regions.insert({
		region: "Region IV-A: CALABARZON",
		province: ["All", "Batangas","Cavite","Laguna","Quezon","Rizal"]
	});
	Regions.insert({
		region: "Region IV-B: MIMAROPA",
		province: ["All", "Marinduque","Occidental Mindoro","Oriental Mindoro","Palawan","Romblon"]
	});
	Regions.insert({
		region: "Region V: Bicol Region",
		province: ["All", "Albay","Camarines Norte","Camarines Sur","Catanduanes","Masbate","Sorsogon"]
	});
	Regions.insert({
		region: "Region VI: Western Visayas",
		province: ["All", "Aklan","Antique","Capiz","Guimaras","Iloilo"]
	});
	Regions.insert({
		region: "Region VII: Central Visayas",
		province: ["All", "Bohol","Cebu","Siquijor"]
	});
	Regions.insert({
		region: "Region VIII: Eastern Visayas",
		province: ["All", "Biliran","Eastern Samar","Leyte","Northern Samar","Samar","Southern Leyte"]
	});
	Regions.insert({
		region: "Region IX: Zamboanga Peninsula",
		province: ["All", "Zamboanga del Norte","Zamboanga del Sur","Zamboanga Sibugay"]
	});
	Regions.insert({
		region: "Region X: Northern Mindanao",
		province: ["All", "Bukidnon","Camiguin","Lanao del Norte","Lanao del Sur","Misamis Occidental","Misamis Oriental"]
	});
	Regions.insert({
		region: "Region XI: Davao Region",
		province: ["All", "Compostela Valley","Davao del Norte","Davao del Sur","Davao Oriental"]
	});
	Regions.insert({
		region: "Region XII: SOCCSKSARGEN",
		province: ["All", "North Cotabato","Sarangani","South Cotabato","Sultan Kudarat"]
	});
	Regions.insert({
		region: "Region XIII: Caraga",
		province: ["All", "Agusan del Norte","Agusan del Sur","Dinagat Islands","Surigao del Norte","Surigao del Sur"]
	});
	Regions.insert({
		region: "ARMM",
		province: ["All", "Basilan","Maguindanao","Shariff Kabunsuan","Sulu","Tawi-Tawi"]
	});
}