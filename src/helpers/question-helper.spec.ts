import { describe, it, expect } from 'vitest';
import {
	firstQuestion,
	allQuestions,
	getNextQuestion,
	isLastQuestion,
} from './question-helper';
import {
	badDayQuestion,
	brainstormQuestion,
	coffeeQuestion,
	dayOffQuestion,
	flyingQuestion,
	PlantType,
	rechargeQuestion,
	talkQuestion,
} from '../data/questions';

describe('first question', () => {
	it('returns brainstormQuestion', () => {
		expect(firstQuestion).toBe(brainstormQuestion);
	});
});

describe('last question', () => {
	it('returns false when not last question', () => {
		expect(isLastQuestion(brainstormQuestion)).toBeFalsy();
	});
	it('returns true when last question', () => {
		expect(isLastQuestion(rechargeQuestion)).toBeTruthy();
	});
});

describe('all questions', () => {
	it('has at least one question per position (1-20)', () => {
		const positions = allQuestions.map((q) => q.position);
		const expectedPosition = 1;
		while (expectedPosition >= 20) {
			expect(positions).toContain(expectedPosition);
		}
	});
	it('has each plant type as a possible value in every question', () => {
		allQuestions.forEach((q) => {
			const possibleValues = q.answers.flatMap((a) => a.value);
			expect(possibleValues.length).toBe(6);
			expect(possibleValues).toContain(PlantType.SpiderPlant);
			expect(possibleValues).toContain(PlantType.Rosemary);
			expect(possibleValues).toContain(PlantType.Fern);
			expect(possibleValues).toContain(PlantType.Pothos);
			expect(possibleValues).toContain(PlantType.ZZPlant);
			expect(possibleValues).toContain(PlantType.SnakePlant);
		});
	});
	it('has at least two answers for each question', () => {
		allQuestions.forEach((q) => {
			expect(q.answers.length).toBeGreaterThanOrEqual(2);
		});
	});
	it('has variant attributes on questions with the same position', () => {
		const positions = allQuestions.map((q) => q.position);
		positions.forEach((position) => {
			const questionsWithPosition = allQuestions.filter(
				(q) => q.position === position,
			);
			if (questionsWithPosition.length > 1) {
				questionsWithPosition.forEach((q) => {
					expect(q.variant).toBeDefined();
				});
			}
		});
	});
});

describe('getNextQuestion', () => {
	it('should getNextQuestion by position', () => {
		const result = getNextQuestion(dayOffQuestion);
		expect(result).toBe(badDayQuestion);
	});
	it('should getNextQuestion by answer variant', () => {
		const result = getNextQuestion(brainstormQuestion, 'b');
		expect(result).toBe(coffeeQuestion);
	});
	it('should getNextQuestion by question variant', () => {
		const result = getNextQuestion(flyingQuestion);
		expect(result).toBe(talkQuestion);
	});
});
