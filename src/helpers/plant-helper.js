import {
	PlantType,
	spiderPlant,
	rosemary,
	fern,
	pothos,
	zzPlant,
	snakePlant,
} from '../data';
import { ref } from 'vue';

const spiderPlantScore = ref(0);
const rosemaryScore = ref(0);
const fernScore = ref(0);
const pothosScore = ref(0);
const zzPlantScore = ref(0);
const snakePlantScore = ref(0);

export function updateValues(values) {
	if (values.includes(PlantType.SpiderPlant)) {
		spiderPlantScore.value++;
	}
	if (values.includes(PlantType.Rosemary)) {
		rosemaryScore.value++;
	}
	if (values.includes(PlantType.Fern)) {
		fernScore.value++;
	}
	if (values.includes(PlantType.Pothos)) {
		pothosScore.value++;
	}
	if (values.includes(PlantType.ZZPlant)) {
		zzPlantScore.value++;
	}
	if (values.includes(PlantType.SnakePlant)) {
		snakePlantScore.value++;
	}
}

export const userPlant = ref(spiderPlant);
const score = ref(0);
export function getUserPlant() {
	score.value = spiderPlantScore.value;
	if (rosemaryScore.value > score.value) {
		userPlant.value = rosemary;
		score.value = rosemaryScore.value;
	}
	if (fernScore.value > score.value) {
		userPlant.value = fern;
		score.value = fernScore.value;
	}
	if (pothosScore.value > score.value) {
		userPlant.value = pothos;
		score.value = pothosScore.value;
	}
	if (zzPlantScore.value > score.value) {
		userPlant.value = zzPlant;
		score.value = zzPlantScore.value;
	}
	if (snakePlantScore.value > score.value) {
		userPlant.value = snakePlant;
		score.value = snakePlantScore.value;
	}
}

export function getPlantPercentage(type) {
	let totalPoints =
		spiderPlantScore.value +
		rosemaryScore.value +
		fernScore.value +
		pothosScore.value +
		zzPlantScore.value +
		snakePlantScore.value;
	if (type === PlantType.SpiderPlant) {
		return (spiderPlantScore.value / totalPoints) * 100;
	}
	if (type === PlantType.Fern) {
		return (fernScore.value / totalPoints) * 100;
	}
	if (type === PlantType.Rosemary) {
		return (rosemaryScore.value / totalPoints) * 100;
	}
	if (type === PlantType.Pothos) {
		return (pothosScore.value / totalPoints) * 100;
	}
	if (type === PlantType.ZZPlant) {
		return (zzPlantScore.value / totalPoints) * 100;
	}
	if (type === PlantType.SnakePlant) {
		return (snakePlantScore.value / totalPoints) * 100;
	}
}
