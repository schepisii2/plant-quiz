import { describe, expect, it } from 'vitest';
import PlantCard from './plant-card.vue';
import { shallowMount } from '@vue/test-utils';

describe('Plant Card', () => {
	vi.mock('../../helpers/plant-helper', () => {
		return {
			getPlantPercentage: vi.fn().mockReturnValue(57.5),
		};
	});
	it('Load results title', () => {
		const testPlant = {
			label: 'Sunflower',
			attributes: ['Always looks on the bright side', 'Intense fear of birds'],
			quotes: [
				{ text: 'Sunflower is very tasty.', speaker: 'Crow' },
				{ text: 'Sunflower has a staring problem.', speaker: 'Sun' },
			],
		};
		const w = shallowMount(PlantCard, {
			props: {
				plant: testPlant,
			},
		});

		expect(w.find('[data-test-id="results-title"]').text()).toBe(
			'You are 57.5% Sunflower',
		);
	});
	it('Load plant information', () => {
		const testPlant = {
			label: 'Sunflower',
			attributes: ['Always looks on the bright side', 'Intense fear of birds'],
			quotes: [
				{ text: 'Sunflower is very tasty.', speaker: 'Crow' },
				{ text: 'Sunflower has a staring problem.', speaker: 'Sun' },
			],
		};
		const w = shallowMount(PlantCard, {
			props: {
				plant: testPlant,
			},
		});

		expect(w.find('[data-test-id="plant-label"]').text()).toBe(testPlant.label);
		testPlant.attributes.forEach((attribute) => {
			expect(w.find('[data-test-id="plant-attributes"]').text()).toContain(
				attribute,
			);
		});
		testPlant.quotes.forEach((quote) => {
			expect(w.find('[data-test-id="plant-quotes"]').text()).toContain(
				`"${quote.text}" - ${quote.speaker}`,
			);
		});
	});
	it('Load plant information - handles blank attributes', () => {
		const testPlant = {
			label: 'Sunflower',
			quotes: [
				{ text: 'Sunflower is very tasty.', speaker: 'Crow' },
				{ text: 'Sunflower has a staring problem.', speaker: 'Sun' },
			],
		};
		const w = shallowMount(PlantCard, {
			props: {
				plant: testPlant,
			},
		});

		expect(w.find('[data-test-id="plant-label"]').text()).toBe(testPlant.label);
		expect(w.find('[data-test-id="plant-attributes"]').text()).toBe('');
		testPlant.quotes.forEach((quote) => {
			expect(w.find('[data-test-id="plant-quotes"]').text()).toContain(
				`"${quote.text}" - ${quote.speaker}`,
			);
		});
	});
	it('Load plant information - handles blank quotes', () => {
		const testPlant = {
			label: 'Sunflower',
			attributes: ['Always looks on the bright side', 'Intense fear of birds'],
		};
		const w = shallowMount(PlantCard, {
			props: {
				plant: testPlant,
			},
		});

		expect(w.find('[data-test-id="plant-label"]').text()).toBe(testPlant.label);
		testPlant.attributes.forEach((attribute) => {
			expect(w.find('[data-test-id="plant-attributes"]').text()).toContain(
				attribute,
			);
		});
		expect(w.find('[data-test-id="plant-quotes"]').text()).toBe('');
	});
});
