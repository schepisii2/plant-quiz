<script setup>
import { getPlantPercentage } from '../../helpers/plant-helper';
import { PlantType } from '../../data';
</script>
<template>
	<h3 class="my-2">Results</h3>
	<div data-test-id="snake-plant-percentage">
		Snake Plant: {{ getPlantPercentage(PlantType.SnakePlant).toFixed(1) }}%
	</div>
	<div data-test-id="zz-plant-percentage">
		ZZ Plant: {{ getPlantPercentage(PlantType.ZZPlant).toFixed(1) }}%
	</div>
	<div data-test-id="pothos-percentage">
		Pothos: {{ getPlantPercentage(PlantType.Pothos).toFixed(1) }}%
	</div>
	<div data-test-id="fern-percentage">
		Fern: {{ getPlantPercentage(PlantType.Fern).toFixed(1) }}%
	</div>
	<div data-test-id="rosemary-percentage">
		Rosemary: {{ getPlantPercentage(PlantType.Rosemary).toFixed(1) }}%
	</div>
	<div data-test-id="spider-plant-percentage">
		Spider Plant: {{ getPlantPercentage(PlantType.SpiderPlant).toFixed(1) }}%
	</div>
</template>
