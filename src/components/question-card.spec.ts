import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import QuestionCard from './question-card.vue';
describe('question-card', () => {
	it('renders question and answers on page load', () => {
		const w = shallowMount(QuestionCard, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		expect(
			w.find('[data-test-id="question-and-answers"]').exists(),
		).toBeTruthy();
	});
});
