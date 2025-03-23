import { describe, expect, it } from 'vitest';
import PlantQuiz from './plant-quiz.vue';
import { shallowMount } from '@vue/test-utils';
import { PlantType } from '../data/questions';

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

		expect(w.find('[data-test-id="question-card"]').exists()).toBeTruthy();
		expect(w.find('[data-test-id="results-card"]').exists()).toBeFalsy();
	});
	it('shows results when quiz is done', async () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.get('[data-test-id="start-quiz-button"]').trigger('click');
		await (w.getComponent('[data-test-id="question-card"]') as any).vm.$emit(
			'done',
		);

		expect(w.find('[data-test-id="question-card"]').exists()).toBeFalsy();
		expect(w.find('[data-test-id="results-card"]').exists()).toBeTruthy();
	});
	it('updates plant values', async () => {
		const w = shallowMount(PlantQuiz, {
			global: { stubs: ['FontAwesomeIcon'] },
		});

		await w.get('[data-test-id="start-quiz-button"]').trigger('click');
		await (w.getComponent('[data-test-id="question-card"]') as any).vm.$emit(
			'values',
			[PlantType.ZZPlant, PlantType.SnakePlant, PlantType.Rosemary],
		);

		expect((w.vm as any).snakePlant).toBe(1);
		expect((w.vm as any).zzPlant).toBe(1);
		expect((w.vm as any).pothos).toBe(0);
		expect((w.vm as any).fern).toBe(0);
		expect((w.vm as any).rosemary).toBe(1);
		expect((w.vm as any).spiderPlant).toBe(0);
	});
});
