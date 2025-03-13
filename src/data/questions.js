const PlantType = Object.freeze({
	SpiderPlant: 0,
	Rosemary: 1,
	Fern: 2,
	Pothos: 3,
	ZZPlant: 4,
	SnakePlant: 5,
});

export const brainstormQuestion = {
	id: '1',
	question: 'Where do you go to brainstorm?',
	answers: [
		{
			label: 'I have the best ideas in the shower.',
			value: [PlantType.Fern, PlantType.Pothos, PlantType.SpiderPlant],
		},
		{
			label: 'I need caffiene! Heading to a local coffee shop.',
			value: [PlantType.ZZPlant],
		},
		{
			label: 'Time to a quick snack. To the kitchen!',
			value: [PlantType.Rosemary, PlantType.SnakePlant],
		},
	],
};

export const showerQuestion = {
	id: '2a',
	question: 'Where do you do in the shower?',
	answers: [
		{
			label: 'Scrub down. Time to feel squeaky clean.',
			value: [PlantType.Pothos, PlantType.ZZPlant],
		},
		{
			label: 'Practice all future debates - real or hypothetical',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label: 'Cry (no one can see me here)',
			value: [PlantType.Fern],
		},
		{
			label: 'Sing! The acoustics are amazing.',
			value: [PlantType.SnakePlant],
		},
	],
};
