import { describe, expect, it } from 'vitest';
import PlantQuiz from './plant-quiz.vue';
import { mount, shallowMount } from '@vue/test-utils';
import TitlePage from './title-page.vue';
import QuestionCard from '../components/question-card/question-card.vue';
import ResultsCard from '@/components/results-card/results-card.vue';

describe('plant quiz', () => {
	it('displays title page on load', () => {
		const w = mount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		expect(w.findComponent(TitlePage).exists()).toBeTruthy();
		expect(w.findComponent(QuestionCard).exists()).toBeFalsy();
		expect(w.findComponent(ResultsCard).exists()).toBeFalsy();
	});
	it('does not display title page when quiz starts', async () => {
		const w = mount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.findComponent(TitlePage).vm.$emit('start');

		expect(w.findComponent(TitlePage).exists()).toBeFalsy();
		expect(w.findComponent(QuestionCard).exists()).toBeTruthy();
		expect(w.findComponent(ResultsCard).exists()).toBeFalsy();
	});
	it('shows results when quiz is done', async () => {
		const w = mount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.findComponent(TitlePage).vm.$emit('start');
		await w.findComponent(QuestionCard).vm.$emit('done');

		expect(w.findComponent(TitlePage).exists()).toBeFalsy();
		expect(w.findComponent(QuestionCard).exists()).toBeFalsy();
		expect(w.findComponent(ResultsCard).exists()).toBeTruthy();
	});
});
