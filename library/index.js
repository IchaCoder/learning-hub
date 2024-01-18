export const colleges = [
	{ name: "College of Health Sciences" },
	{ name: "College of Engineering" },
	{ name: "College of Applied Science" },
];

export const faculties = {
	"College of Health Sciences": ["Faculty of Medicine", "Faculty of Nursing"],
	"College of Engineering": [
		"Faculty of Mechanical Engineering",
		"Faculty of Electrical Engineering",
	],
	"College of Applied Science": [
		"Faculty of Physics",
		"Faculty of Chemistry",
	],
};

export const levels = ["100", "200", "300", "400", "500", "600"];

export const courses = {
	"Faculty of Medicine": [
		{ label: "Pharmacology", value: "pharmacology" },
		// Add more medicine courses as needed
	],
	"Faculty of Nursing": [
		{ label: "Nursing Fundamentals", value: "nursing_fundamentals" },
		{
			label: "Community Health Nursing",
			value: "community_health_nursing",
		},
		// Add more nursing courses as needed
	],
	"Faculty of Mechanical Engineering": [
		{ label: "Thermodynamics", value: "thermodynamics" },
		{ label: "Mechanical Design", value: "mechanical_design" },
		// Add more mechanical engineering courses as needed
	],
	"Faculty of Electrical Engineering": [
		{ label: "Circuit Analysis", value: "circuit_analysis" },
		{
			label: "Digital Signal Processing",
			value: "digital_signal_processing",
		},
		// Add more electrical engineering courses as needed
	],
	"Faculty of Physics": [
		{ label: "Classical Mechanics", value: "classical_mechanics" },
		{ label: "Quantum Physics", value: "quantum_physics" },
		// Add more physics courses as needed
	],
	"Faculty of Chemistry": [
		{ label: "Organic Chemistry", value: "organic_chemistry" },
		{ label: "Physical Chemistry", value: "physical_chemistry" },
		// Add more chemistry courses as needed
	],
};

// You can continue adding more faculties and their respective courses based on your requirements.
