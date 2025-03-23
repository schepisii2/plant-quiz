import { PlantType } from './plant-type-enum';

export const spiderPlant = {
	type: PlantType.SpiderPlant,
	attributes: [
		'Certified Yapper',
		'Knows all the trends',
		'Easily distracted',
		'Not a great listener',
	],
	quotes: [
		{
			text: 'Spider Plant always makes me feel welcomed!',
			speaker: PlantType.Fern,
		},
		{
			text: 'Spider Plant is my favorite person to work with. They make the day pass so fast.',
			speaker: PlantType.SpiderPlant,
		},
	],
};

export const rosemary = {
	type: PlantType.Rosemary,
	attributes: [
		'Has 100+ hobbies',
		'Mom friend',
		'Has more supplies than motivation to do hobbies',
		'Constantly worried about friends but doesn`t know how to tell them',
	],
	quotes: [
		{
			text: 'Anytime I hear about all the things that Rosemary is doing I get tired for them.',
			speaker: PlantType.ZZPlant,
		},
		{
			text: 'Rosemary is always down to try a new restaurant with me.',
			speaker: PlantType.SpiderPlant,
		},
	],
};

export const fern = {
	type: PlantType.Fern,
	attributes: [
		'Always hydrated',
		'Really good at communicating their feelings',
		'Dramatic',
		'Sensitive to change',
	],
	quotes: [
		{
			text: 'Once Fern had a panic attack after dropping their keys while trying to unlock the door',
			speaker: PlantType.Pothos,
		},
		{
			text: 'Fern is one of my closest friends!',
			speaker: PlantType.SpiderPlant,
		},
	],
};

export const pothos = {
	type: PlantType.Pothos,
	attributes: [
		'Decisive',
		'Gives great advice',
		'When their brain is a mess, so is their space',
		'No one that asks for their advice seems to listen to it',
	],
	quotes: [
		{
			text: 'When I can`t figure out what to do, I ask Pothos.',
			speaker: PlantType.SnakePlant,
		},
		{
			text: 'Pothos isn`t always great at finding a nice way to say things.',
			speaker: PlantType.Rosemary,
		},
	],
};

export const zzPlant = {
	type: PlantType.ZZPlant,
	attributes: [
		'Likes going outside as a concept',
		'Goes with the flow',
		'Always tired',
		'Can never concentrate',
	],
	quotes: [
		{
			text: 'ZZ Plant is a great listener! I tell them everything.',
			speaker: PlantType.SpiderPlant,
		},
		{
			text: 'I wish I slept as much as ZZ Plant. I`d probably feel so much better.',
			speaker: PlantType.Pothos,
		},
	],
};

export const snakePlant = {
	type: PlantType.SnakePlant,
	attributes: [
		'Would do anything to protect their friends',
		'Determined, nothing can stop them once they set their mind to it',
		'Constantly fighting the world',
		'Chaotic',
	],
	quotes: [
		{
			text: 'I love Snake Plant, but I am instantly worried anytime they call me.',
			speaker: PlantType.Rosemary,
		},
		{
			text: 'Every story Snake Plant tells me sounds like a nightmare',
			speaker: PlantType.ZZPlant,
		},
	],
};
