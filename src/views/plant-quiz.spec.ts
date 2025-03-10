import { describe, expect, it } from 'vitest';
import PlantQuiz from './plant-quiz.vue';
import { shallowMount } from '@vue/test-utils';

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
});
