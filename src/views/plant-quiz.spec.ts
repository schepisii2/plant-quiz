import { describe, expect, it } from 'vitest';
import PlantQuiz from './plant-quiz.vue';
import { shallowMount } from '@vue/test-utils';
import BrainstormQuestion from '../components/questions/brainstorm-question.vue';

describe('title page', () => {
	it('displays title', () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		const titleText = w.find('[data-test-id="plant-quiz-title"]').text();
		expect(titleText).toBe('Plant Quiz');
	});
	it('displays description', () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		const descriptionText = w
			.find('[data-test-id="plant-quiz-description"]')
			.text();
		expect(descriptionText).toBe('What kind of houseplant are you?');
	});
	it('displays start quiz button', () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		expect(w.find('[data-test-id="start-quiz-button"]').exists()).toBeTruthy();
	});
	it('stops displaying title page when start quiz button is clicked', async () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.get('[data-test-id="start-quiz-button"]').trigger('click');

		expect(w.find('[data-test-id="plant-quiz-title"]').exists()).toBeFalsy();
		expect(
			w.find('[data-test-id="plant-quiz-description"]').exists(),
		).toBeFalsy();
		expect(w.find('[data-test-id="start-quiz-button"]').exists()).toBeFalsy();
	});
	it('starts displaying questions when start quiz button is clicked', async () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.get('[data-test-id="start-quiz-button"]').trigger('click');

		expect(w.findComponent(BrainstormQuestion).exists()).toBeTruthy();
	});
});
