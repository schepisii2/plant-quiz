<script setup>
import { onMounted } from 'vue';
import {
	getUserPlant,
	getPlantPercentage,
	userPlant,
} from '../helpers/plant-helper';
import { PlantType } from '../data';

onMounted(() => getUserPlant);
</script>
<template>
	<div class="d-flex flex-column align-items-center">
		<h1 class="my-3" data-test-id="results-title" style="color: seagreen">
			You are {{ getPlantPercentage(userPlant.type).toFixed(1) }}%
			{{ userPlant.label }}
		</h1>
		<h3 class="my-2" data-test-id="results-scorecard" style="color: seagreen">
			Results
		</h3>
		<div data-test-id="snake-plant-percentage" style="color: seagreen">
			Snake Plant: {{ getPlantPercentage(PlantType.SnakePlant).toFixed(1) }}%
		</div>
		<div data-test-id="zz-plant-percentage" style="color: seagreen">
			ZZ Plant: {{ getPlantPercentage(PlantType.ZZPlant).toFixed(1) }}%
		</div>
		<div data-test-id="pothos-percentage" style="color: seagreen">
			Pothos: {{ getPlantPercentage(PlantType.Pothos).toFixed(1) }}%
		</div>
		<div data-test-id="fern-percentage" style="color: seagreen">
			Fern: {{ getPlantPercentage(PlantType.Fern).toFixed(1) }}%
		</div>
		<div data-test-id="rosemary-percentage" style="color: seagreen">
			Rosemary: {{ getPlantPercentage(PlantType.Rosemary).toFixed(1) }}%
		</div>
		<div data-test-id="spider-plant-percentage" style="color: seagreen">
			Spider Plant: {{ getPlantPercentage(PlantType.SpiderPlant).toFixed(1) }}%
		</div>
	</div>
</template>
