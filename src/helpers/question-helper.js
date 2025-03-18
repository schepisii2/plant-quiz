import {
	brainstormQuestion,
	showerQuestion,
	coffeeQuestion,
	snackQuestion,
	dayOffQuestion,
	badDayQuestion,
	doorOpenQuestion,
	mitesQuestion,
	eatQuestion,
	pestQuestion,
	doorQuestion,
	messQuestion,
	closetQuestion,
	flyingQuestion,
	talkQuestion,
	nightQuestion,
	catepillarQuestion,
	runningQuestion,
	collarQuestion,
	pocketQuestion,
	stomachQuestion,
	walkQuestion,
	drivewayQuestion,
	sleepQuestion,
	morningQuestion,
	picnicQuestion,
	pileaQuestion,
	dinnerQuestion,
	decompressQuestion,
	rechargeQuestion,
} from '../data/questions';

export const allQuestions = [
	brainstormQuestion,
	showerQuestion,
	coffeeQuestion,
	snackQuestion,
	dayOffQuestion,
	badDayQuestion,
	doorOpenQuestion,
	mitesQuestion,
	eatQuestion,
	pestQuestion,
	doorQuestion,
	messQuestion,
	closetQuestion,
	flyingQuestion,
	talkQuestion,
	nightQuestion,
	catepillarQuestion,
	runningQuestion,
	collarQuestion,
	pocketQuestion,
	stomachQuestion,
	walkQuestion,
	drivewayQuestion,
	sleepQuestion,
	morningQuestion,
	picnicQuestion,
	pileaQuestion,
	dinnerQuestion,
	decompressQuestion,
	rechargeQuestion,
].sort((a, b) => a.position - b.position);

export const firstQuestion = brainstormQuestion;

export function getNextQuestion(currentQuestion, answerVariant) {
	const nextPosition = currentQuestion.position + 1;
	const possibleQuestions = allQuestions.filter(
		(q) => q.position === nextPosition,
	);
	if (possibleQuestions.length === 1) {
		return possibleQuestions[0];
	} else if (currentQuestion.variant) {
		return possibleQuestions.find((q) => q.variant === currentQuestion.variant);
	}
	return possibleQuestions.find((q) => q.variant === answerVariant);
}
