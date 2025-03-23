import { flushPromises, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import QuestionCard from './question-card.vue';
import { rechargeQuestion } from '../data/questions';
describe('question-card', () => {
	it('renders question and answers on page load', () => {
		const w = shallowMount(QuestionCard, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		expect(
			w.find('[data-test-id="question-and-answers"]').exists(),
		).toBeTruthy();
		expect(w.find('[data-test-id="question-text"]').exists()).toBeTruthy();
		expect(w.find('[data-test-id="answer-button-0"]').exists()).toBeTruthy();
		expect(w.find('[data-test-id="answer-button-1"]').exists()).toBeTruthy();
		expect(w.find('[data-test-id="answer-button-2"]').exists()).toBeTruthy();
	});
	it('click answer', async () => {
		const w = shallowMount(QuestionCard, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		await w.find('[data-test-id="answer-button-0"]').trigger('click');
		expect(w.emitted('values')).toBeDefined();
	});
});
