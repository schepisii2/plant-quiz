<script setup>
import { defineProps } from 'vue';
import { getPlantPercentage } from '../../helpers/plant-helper';
import PlantImage from './plant-image.vue';

const props = defineProps(['plant']);
</script>
<template>
	<h2
		class="d-flex flex-column align-items-center my-3"
		data-test-id="results-title"
	>
		You are {{ getPlantPercentage(props.plant.type)?.toFixed(1) }}%
		{{ props.plant.label }}
	</h2>
	<hr />
	<div data-test-id="plant-info">
		<plant-image :plant="plant" />
		<h1 data-test-id="plant-label">{{ props.plant.label }}</h1>
		<ul data-test-id="plant-attributes">
			<li v-for="attribute in props.plant.attributes" v-bind:key="attribute">
				{{ attribute }}
			</li>
		</ul>
		<div data-test-id="plant-quotes">
			<div v-for="quote in props.plant.quotes" v-bind:key="quote.text">
				"{{ quote.text }}" - {{ quote.speaker }}
			</div>
		</div>
	</div>
</template>
