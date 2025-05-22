import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ResultsScorecard from './results-scorecard.vue';
import { PlantType } from '../../data';

describe('Results Scorecard', () => {
	vi.mock('../../helpers/plant-helper', () => {
		return {
			getPlantPercentage: (type) => {
				if (type === PlantType.SnakePlant || type === PlantType.Fern) {
					return 10;
				}
				return 20;
			},
		};
	});
	it('Renders plant percentages', () => {
		const w = shallowMount(ResultsScorecard);
		expect(w.find('[data-test-id="snake-plant-percentage"]').text()).toBe(
			'Snake Plant: 10.0%',
		);
		expect(w.find('[data-test-id="zz-plant-percentage"]').text()).toBe(
			'ZZ Plant: 20.0%',
		);
		expect(w.find('[data-test-id="pothos-percentage"]').text()).toBe(
			'Pothos: 20.0%',
		);
		expect(w.find('[data-test-id="fern-percentage"]').text()).toBe(
			'Fern: 10.0%',
		);
		expect(w.find('[data-test-id="rosemary-percentage"]').text()).toBe(
			'Rosemary: 20.0%',
		);
		expect(w.find('[data-test-id="spider-plant-percentage"]').text()).toBe(
			'Spider Plant: 20.0%',
		);
	});
});
