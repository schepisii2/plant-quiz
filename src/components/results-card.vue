<script setup>
import { onMounted } from 'vue';
import {
	getUserPlant,
	getPlantPercentage,
	userPlant,
} from '../helpers/plant-helper';
import { PlantType } from '../data';

onMounted(() => getUserPlant());
</script>
<template>
	<div class="mx-4" style="color: seagreen">
		<h2
			class="d-flex flex-column align-items-center my-3"
			data-test-id="results-title"
		>
			You are {{ getPlantPercentage(userPlant.type).toFixed(1) }}%
			{{ userPlant.label }}
		</h2>
		<hr />
		<div data-test-id="plant-info">
			<h1>{{ userPlant.label }}</h1>
			<ul>
				<li v-for="attribute in userPlant.attributes" v-bind:key="attribute">
					{{ attribute }}
				</li>
			</ul>
			<div v-for="quote in userPlant.quotes" v-bind:key="quote.text">
				"{{ quote.text }}" - {{ quote.speaker }}
			</div>
		</div>
		<hr />
		<h3 class="my-2" data-test-id="results-scorecard">Results</h3>
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
	</div>
</template>
