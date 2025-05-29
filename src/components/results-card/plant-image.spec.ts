import PlantImage from './plant-image.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { PlantType } from '../../data';

const images = {
	fern: '[data-test-id="fern-image"]',
	pothos: '[data-test-id="pothos-image"]',
	rosemary: '[data-test-id="rosemary-image"]',
	snakePlant: '[data-test-id="snake-plant-image"]',
	spiderPlant: '[data-test-id="spider-plant-image"]',
	zzPlant: '[data-test-id="zz-plant-image"]',
};

describe('Plant Image', () => {
	it('renders fern image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.Fern } },
		});

		expect(w.find(images.fern).exists()).toBeTruthy();
		expect(w.find(images.pothos).exists()).toBeFalsy();
		expect(w.find(images.rosemary).exists()).toBeFalsy();
		expect(w.find(images.snakePlant).exists()).toBeFalsy();
		expect(w.find(images.spiderPlant).exists()).toBeFalsy();
		expect(w.find(images.zzPlant).exists()).toBeFalsy();
	});
	it('renders pothos image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.Pothos } },
		});

		expect(w.find(images.fern).exists()).toBeFalsy();
		expect(w.find(images.pothos).exists()).toBeTruthy();
		expect(w.find(images.rosemary).exists()).toBeFalsy();
		expect(w.find(images.snakePlant).exists()).toBeFalsy();
		expect(w.find(images.spiderPlant).exists()).toBeFalsy();
		expect(w.find(images.zzPlant).exists()).toBeFalsy();
	});
	it('renders rosemary image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.Rosemary } },
		});

		expect(w.find(images.fern).exists()).toBeFalsy();
		expect(w.find(images.pothos).exists()).toBeFalsy();
		expect(w.find(images.rosemary).exists()).toBeTruthy();
		expect(w.find(images.snakePlant).exists()).toBeFalsy();
		expect(w.find(images.spiderPlant).exists()).toBeFalsy();
		expect(w.find(images.zzPlant).exists()).toBeFalsy();
	});
	it('renders snake plant image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.SnakePlant } },
		});

		expect(w.find(images.fern).exists()).toBeFalsy();
		expect(w.find(images.pothos).exists()).toBeFalsy();
		expect(w.find(images.rosemary).exists()).toBeFalsy();
		expect(w.find(images.snakePlant).exists()).toBeTruthy();
		expect(w.find(images.spiderPlant).exists()).toBeFalsy();
		expect(w.find(images.zzPlant).exists()).toBeFalsy();
	});
	it('renders spider plant image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.SpiderPlant } },
		});

		expect(w.find(images.fern).exists()).toBeFalsy();
		expect(w.find(images.pothos).exists()).toBeFalsy();
		expect(w.find(images.rosemary).exists()).toBeFalsy();
		expect(w.find(images.snakePlant).exists()).toBeFalsy();
		expect(w.find(images.spiderPlant).exists()).toBeTruthy();
		expect(w.find(images.zzPlant).exists()).toBeFalsy();
	});
	it('renders zz plant image', () => {
		const w = shallowMount(PlantImage, {
			props: { plant: { type: PlantType.ZZPlant } },
		});

		expect(w.find(images.fern).exists()).toBeFalsy();
		expect(w.find(images.pothos).exists()).toBeFalsy();
		expect(w.find(images.rosemary).exists()).toBeFalsy();
		expect(w.find(images.snakePlant).exists()).toBeFalsy();
		expect(w.find(images.spiderPlant).exists()).toBeFalsy();
		expect(w.find(images.zzPlant).exists()).toBeTruthy();
	});
});
