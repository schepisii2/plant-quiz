import { describe, expect, it } from 'vitest';
import TitlePage from './title-page.vue';
import { shallowMount } from '@vue/test-utils';

describe('title page', () => {
	it('displays title', () => {
		const w = shallowMount(TitlePage, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		const titleText = w.find('[data-test-id="plant-quiz-title"]').text();
		expect(titleText).toBe('Plant Quiz');
	});
	it('displays description', () => {
		const w = shallowMount(TitlePage, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		const descriptionText = w
			.find('[data-test-id="plant-quiz-description"]')
			.text();
		expect(descriptionText).toBe('What kind of houseplant are you?');
	});
	it('displays start quiz button', () => {
		const w = shallowMount(TitlePage, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		expect(w.find('[data-test-id="start-quiz-button"]').exists()).toBeTruthy();
	});
	it('emits start on button click', async () => {
		const w = shallowMount(TitlePage, {
			global: { stubs: ['FontAwesomeIcon'] },
		});
		await w.find('[data-test-id="start-quiz-button"]').trigger('click');
		expect(w.emitted('start')).toBeTruthy();
	});
});
