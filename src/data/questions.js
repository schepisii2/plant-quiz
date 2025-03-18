const PlantType = Object.freeze({
	SpiderPlant: 0,
	Rosemary: 1,
	Fern: 2,
	Pothos: 3,
	ZZPlant: 4,
	SnakePlant: 5,
});

/** Rules for questions:
 * 1. Each question has a position, question, and answers.
 * 2. All answer values in a questions will add up to one of each plant type.
 * 3. Each question with a variant will follow a question where the answers have the same variant options (when ordered by position).
 * 4. Some questions have a 'transition' attribute, which will display after the parent question is answered and before the next question is shown.
 * 5. Each question has a unique combination of position and variant.
 */

export const brainstormQuestion = {
	position: 1,
	question: 'Where do you go to brainstorm?',
	answers: [
		{
			variant: 'a',
			label: 'I have the best ideas in the shower.',
			value: [PlantType.Fern, PlantType.Pothos, PlantType.SpiderPlant],
		},
		{
			variant: 'b',
			label: 'I need caffiene! Heading to a local coffee shop.',
			value: [PlantType.ZZPlant],
		},
		{
			variant: 'c',
			label: 'Time to a quick snack. To the kitchen!',
			value: [PlantType.Rosemary, PlantType.SnakePlant],
		},
	],
};

export const showerQuestion = {
	position: 2,
	variant: 'a',
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

export const coffeeQuestion = {
	position: 2,
	variant: 'b',
	question: 'What do you get at a coffee shop?',
	answers: [
		{
			label: 'Anything iced!',
			value: [PlantType.Fern],
		},
		{
			label: 'A seasonal drink',
			value: [PlantType.SpiderPlant, PlantType.SnakePlant, PlantType.Rosemary],
		},
		{
			label: 'Black coffee or cold brew',
			value: [PlantType.Pothos, PlantType.ZZPlant],
		},
	],
};

export const snackQuestion = {
	position: 2,
	variant: 'c',
	question: 'What snack do you prefer?',
	answers: [
		{
			label: 'Fruit or veggies',
			value: [PlantType.Fern],
		},
		{
			label: 'Cheese and crackers',
			value: [PlantType.SpiderPlant, PlantType.Pothos],
		},
		{
			label: 'Old Halloween candy',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label: 'Did I say quick snack? I started baking muffins...',
			value: [PlantType.Rosemary],
		},
	],
};

export const dayOffQuestion = {
	position: 3,
	question: 'You have a day off from work/school. What do you do?',
	answers: [
		{
			label:
				'Catch up on chores. Your place has not been truly clean since you moved in, and you ran out of milk 2 days ago.',
			value: [PlantType.Pothos, PlantType.SnakePlant],
		},
		{
			label: 'Sleep-in',
			value: [PlantType.ZZPlant],
		},
		{
			label:
				'Check the weather. Sunny days are for walks. Rainy days are for reading.',
			value: [PlantType.Rosemary, PlantType.Fern],
		},
		{
			label:
				'Go to a seasonal attraction. Is it strawberry picking season yet?',
			value: [PlantType.SpiderPlant],
		},
	],
};

export const badDayQuestion = {
	position: 4,
	question: 'Your friend Pilea texts you. They are having a bad day.',
	answers: [
		{
			label: 'Call them. You want to make sure they are okay ASAP.',
			value: [PlantType.Pothos, PlantType.SnakePlant],
		},
		{
			label:
				'(Text) "Do you want to talk about it or do you want a distraction?"',
			value: [PlantType.SpiderPlant],
		},
		{
			label:
				'You plan to bring them their favorite treat over on the way home. Bad days are easier with a good scone.',
			value: [PlantType.Rosemary],
		},
		{
			label: '(Text) "Oh no! What happened?"',
			value: [PlantType.SnakePlant],
		},
	],
};

export const doorOpenQuestion = {
	position: 5,
	question:
		'Pilea invites you over, and you notice they left their door open. You walk in and close the door behind you.',
	answers: [
		{
			label: '"Hey, you left the door open. You must be feeling pretty bad"',
			value: [PlantType.Pothos, PlantType.SnakePlant],
		},
		{
			label: '"How are you feeling?"',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label: 'Sit next to them and wait for them to talk',
			value: [PlantType.Fern, PlantType.ZZPlant],
		},
	],
};

export const mitesQuestion = {
	position: 6,
	question:
		'Pilea tells you about her stressful day. She found out that she might have mites. Now, she has to wait to be repotted.',
	answers: [
		{
			label:
				'Discretely move to the other side of the couch. Mites are contagious.',
			value: [PlantType.Fern],
		},
		{
			label:
				'You try to remember the last time you checked for mites. Yikes! What that two years ago?',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label: '"What a big deal! What makes you think you might have mites?"',
			value: [PlantType.Pothos, PlantType.Rosemary],
		},
		{
			label:
				'"Ugh! Mites are the worst. They are always bad this time of year too."',
			value: [PlantType.SpiderPlant],
		},
	],
};

export const eatQuestion = {
	position: 7,
	question:
		'Pilea tells you that she forgot to eat today because she has been so worried about scheduling pesticide treatment.',
	answers: [
		{
			label:
				'(Your stomach growls) "I could eat too! What do you want to eat?"',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label:
				'"Want to order from the new pizza place? You will feel better once you eat."',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label:
				'"We can schedule your pesticide treatment together! Let me get my laptop."',
			value: [PlantType.Fern, PlantType.Pothos],
		},
	],
	transition: 'You order pizza. After Pilea eats, she seems more like herself',
};

export const pestQuestion = {
	position: 8,
	question:
		'Pilea tells you about a scary new pest. It got tired of eating garden plants and wants to try houseplants.',
	answers: [
		{
			label: '"I heard all about that! Did you hear about the break-ins?"',
			value: [PlantType.SpiderPlant],
		},
		{
			label: '"I am not scared. I could take it in a fight."',
			value: [PlantType.SnakePlant],
		},
		{
			label: '"Where did you hear that?"',
			value: [PlantType.Pothos, PlantType.Rosemary, PlantType.ZZPlant],
		},
		{
			label: '"But... we are houseplants." (scared)',
			value: [PlantType.Fern],
		},
	],
	transition:
		'You are interrupted by the sound of rustling coming from the bedroom. You see a shadow move under the door.',
};

export const doorQuestion = {
	position: 9,
	question: 'Pilea goes towards the door.',
	answers: [
		{
			label: '"Are you sure that is a good idea?"',
			value: [PlantType.Rosemary],
		},
		{
			label: '"Don`t do that."',
			value: [PlantType.Pothos, PlantType.SpiderPlant],
		},
		{
			label: '(Silence)',
			value: [PlantType.Fern, PlantType.ZZPlant],
		},
		{
			label: 'You stand up and open the door before she can.',
			value: [PlantType.SnakePlant],
		},
	],
};

export const messQuestion = {
	position: 10,
	question: 'The room is a mess, but it doesn`t look like anyone is there.',
	answers: [
		{
			variant: 'a',
			label: '"Did you make this mess?"',
			value: [PlantType.Pothos],
		},
		{
			variant: 'b',
			label:
				'Invite Pilea to your place. She shouldn`t spend the night here alone.',
			value: [PlantType.Fern, PlantType.SnakePlant, PlantType.Rosemary],
		},
		{
			variant: 'c',
			label: 'Keep eating pizza.',
			value: [PlantType.ZZPlant, PlantType.SpiderPlant],
		},
	],
};

export const closetQuestion = {
	position: 11,
	variant: 'a',
	question: 'Pilea says there is a ladybug trapped in the closet.',
	answers: [
		{
			label: 'Open the door. Ladybugs are good pets! They eat aphids.',
			value: [PlantType.Fern, PlantType.SpiderPlant],
		},
		{
			label:
				'It could be an invasive Asian Lady Bettle. Lock the closet, and tell Pilea to schedule an inspection.',
			value: [PlantType.Pothos, PlantType.Rosemary],
		},
		{
			label: 'Take a breath. A fight might be coming.',
			value: [PlantType.ZZPlant, PlantType.SnakePlant],
		},
	],
};

export const flyingQuestion = {
	position: 12,
	variant: 'a',
	question: 'The ladybug bursts out of the closet. You are flying on its back.',
	answers: [
		{
			label: 'So cool! Is now a bad time to take a picture?',
			value: [PlantType.SpiderPlant],
		},
		{
			label: 'You can`t stop thinking about falling.',
			value: [PlantType.Fern, PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label: 'At least Pilea is safe at home. You hope she feels better soon.',
			value: [PlantType.Rosemary, PlantType.Pothos],
		},
	],
};

export const talkQuestion = {
	position: 13,
	variant: 'a',
	question:
		'You think the ladybug is trying to talk to you, but you don`t understand what it`s saying.',
	answers: [
		{
			label: 'Lay back and fall asleep. You can figure things out later.',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label:
				'You look for your place below. Maybe if you point at it, the lady bug will drop you off.',
			value: [PlantType.Fern, PlantType.Pothos],
		},
		{
			label:
				'You`ve taken a few ladybuglish lessons before. Your speaking attempts and frantic gesturing should be a good combo.',
			value: [PlantType.Rosemary, PlantType.SpiderPlant],
		},
	],
};

export const nightQuestion = {
	position: 14,
	variant: 'a',
	question:
		'The ladybug drops you off at your house. You crawl down its back. How do you end the night?',
	answers: [
		{
			label: 'You`re exhausted. You climb into bed.',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
		{
			label:
				'You brew yourself some caffiene-free tea and grab your journal. You have a lot to process.',
			value: [PlantType.Fern, PlantType.Rosemary, PlantType.SpiderPlant],
		},
		{
			label:
				'Text Pilea that you made it home and remind her to lock her door.',
			value: [PlantType.Pothos],
		},
	],
};

export const catepillarQuestion = {
	position: 11,
	variant: 'b',
	question: 'On the way home, you see a catepillar. It looks hungry.',
	answers: [
		{
			label: 'Break into a dead sprint. Good luck catching up catepillar.',
			value: [PlantType.SnakePlant, PlantType.Pothos],
		},
		{
			label:
				'You wonder what it would be like to be a bug. It has so many little arms.',
			value: [PlantType.SpiderPlant, PlantType.ZZPlant],
		},
		{
			label: 'This is it. This is how you die.',
			value: [PlantType.Fern, PlantType.Rosemary],
		},
	],
};

export const runningQuestion = {
	position: 12,
	variant: 'b',
	question:
		'The catepillar is running after you. It`s so much faster than you`d think.',
	answers: [
		{
			label: 'Close your eyes. It`s over now.',
			value: [PlantType.SnakePlant, PlantType.ZZPlant, PlantType.Fern],
		},
		{
			label:
				'Rustle your leaves and make yourself look big. Catepillars don`t fight if they don`t think they`ll win.',
			value: [PlantType.SpiderPlant, PlantType.Pothos, PlantType.Rosemary],
		},
	],
};

export const collarQuestion = {
	position: 13,
	variant: 'b',
	question:
		'Something shiny catches your eye. Does the catepillar have a collar?',
	answers: [
		{
			label: 'Who in their right mind would own a catepillar? They eat plants!',
			value: [PlantType.Fern, PlantType.Pothos],
		},
		{
			label:
				'Poor guy is lost. You take a picture to post on a neighborhood social media app.',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label:
				'Call out after the catepillar. If he follows you, he can stay at your place for the night.',
			value: [PlantType.SnakePlant, PlantType.ZZPlant],
		},
	],
};

export const pocketQuestion = {
	position: 14,
	variant: 'b',
	question:
		'The catepillar sniffs you. It wants what`s in your pocket. What is it?',
	answers: [
		{
			label: 'A thimble, some thread, and a button.',
			value: [PlantType.Rosemary],
		},
		{
			label: 'Not sure, but it`s sticky',
			value: [PlantType.SnakePlant],
		},
		{
			label: 'All you have is your phone.',
			value: [PlantType.Pothos, PlantType.SpiderPlant],
		},
		{
			label: 'Electrolytes. You knew tonight was going to be a long night.',
			value: [PlantType.Fern, PlantType.ZZPlant],
		},
	],
};

export const stomachQuestion = {
	position: 11,
	variant: 'c',
	question: 'The pizza gives you a stomachache.',
	answers: [
		{
			label:
				'Can mites give you a stomachache? You pull out your phone to check.',
			value: [PlantType.SpiderPlant, PlantType.Fern],
		},
		{
			label: 'Why do the things you love always hurt you?',
			value: [PlantType.ZZPlant, PlantType.Pothos],
		},
		{
			label: 'Grab a glass of water.',
			value: [PlantType.Rosemary, PlantType.SnakePlant],
		},
	],
};

export const walkQuestion = {
	position: 12,
	variant: 'c',
	question:
		'Pilea decides to go to sleep, and you walk home. What do you notice?',
	answers: [
		{
			label: 'The stars make you feel so small.',
			value: [PlantType.Rosemary, PlantType.SpiderPlant],
		},
		{
			label: 'The ground under your feet.',
			value: [PlantType.ZZPlant, PlantType.SnakePlant],
		},
		{
			label: 'The time; it`s so late.',
			value: [PlantType.Fern, PlantType.Pothos],
		},
	],
};

export const drivewayQuestion = {
	position: 13,
	variant: 'c',
	question: 'Your neighbor has a lot of cars in their driveway.',
	answers: [
		{
			label: '(Text) "Can I join the party?"',
			value: [PlantType.SpiderPlant, PlantType.SnakePlant],
		},
		{
			label:
				'You make a mental note to ask them about it later. It`s time for bed.',
			value: [PlantType.Rosemary, PlantType.Pothos],
		},
		{
			label: 'What does that have to do with you? You go to bed.',
			value: [PlantType.ZZPlant, PlantType.Fern],
		},
	],
};

export const sleepQuestion = {
	position: 14,
	variant: 'c',
	question:
		'You feel asleep faster than you expected. What did you dream about?',
	answers: [
		{
			label: 'You are at work, and everything is going wrong.',
			value: [PlantType.SnakePlant, PlantType.Fern],
		},
		{
			label:
				'Making fresh-baked cookies, but you wak up before you take a bite.',
			value: [PlantType.Rosemary, PlantType.SpiderPlant],
		},
		{
			label: 'Nothing. You slept like a rock.',
			value: [PlantType.ZZPlant, PlantType.Pothos],
		},
	],
};

export const morningQuestion = {
	position: 15,
	question: 'What`s the first thing you do the next morning?',
	answers: [
		{
			label: 'Call Fiddle Leaf Fig. They will not be-leaf the night you had.',
			value: [PlantType.SpiderPlant, PlantType.Fern],
		},
		{
			label:
				'Grab coffe at Red Bean`s cafe. You deserve a treat after the night you had.',
			value: [PlantType.Rosemary, PlantType.Pothos],
		},
		{
			label: 'Go to work. Bills won`t pay themselves.',
			value: [PlantType.ZZPlant, PlantType.SnakePlant],
		},
	],
};

export const picnicQuestion = {
	position: 16,
	question:
		'Fiddle Leaf Fig invites you to a picnic next week. What do you say?',
	answers: [
		{
			label: 'Maybe. You`ll see how you feel that day.',
			value: [PlantType.SpiderPlant, PlantType.SnakePlant],
		},
		{
			label: 'You say yes, but you instantly regret it.',
			value: [PlantType.ZZPlant, PlantType.Pothos],
		},
		{
			label: 'Yes! You love the park.',
			value: [PlantType.Rosemary, PlantType.Fern],
		},
	],
};

export const pileaQuestion = {
	position: 17,
	question: 'You haven`t heard from Pilea all day.',
	answers: [
		{
			label: 'You send her lots of memes of social media.',
			value: [PlantType.SpiderPlant],
		},
		{
			label: 'You call her to see how they`re feeling.',
			value: [PlantType.Rosemary, PlantType.Pothos, PlantType.SnakePlant],
		},
		{
			label:
				'You trust Pilea to reach out to you if she needs you. You give her space.',
			value: [PlantType.Fern, PlantType.ZZPlant],
		},
	],
};

export const dinnerQuestion = {
	position: 18,
	question: 'What do you make for dinner?',
	answers: [
		{
			label: 'A new recipe! That should keep your mind off things.',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label: 'A spoonful of peanut butter, leftover pizza, and a cheese stick',
			value: [PlantType.ZZPlant, PlantType.SnakePlant, PlantType.Pothos],
		},
		{
			label: 'Follow your meal plan - looks like you are eating tacos tonight',
			value: [PlantType.Fern],
		},
	],
};

export const decompressQuestion = {
	position: 19,
	question: 'How do you decompress after work?',
	answers: [
		{
			label: 'Work on one of your craft projects',
			value: [PlantType.SpiderPlant, PlantType.Rosemary],
		},
		{
			label: 'Fall asleep with your TV on',
			value: [PlantType.ZZPlant, PlantType.SnakePlant],
		},
		{
			label: 'Go for a walk',
			value: [PlantType.Fern, PlantType.Pothos],
		},
	],
};

export const rechargeQuestion = {
	position: 20,
	question: 'How recharged are you at the end of the day?',
	answers: [
		{
			label:
				'80-100% - Your routine made yesterday`s exhaustion feel far away.',
			value: [PlantType.SpiderPlant, PlantType.Fern],
		},
		{
			label: '50-80% - It always takes you awhile to recover from a bad day.',
			value: [PlantType.Pothos, PlantType.Rosemary],
		},
		{
			label: '0-50% - You hope sleeping will heal you.',
			value: [PlantType.ZZPlant, PlantType.SnakePlant],
		},
	],
};
