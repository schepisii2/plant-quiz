<script setup>
import { PlantType } from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['plant']);
</script>
<template>
	<div class="d-flex justify-content-center m-2">
		<img
			v-if="props.plant.type === PlantType.Fern"
			data-test-id="fern-image"
			style="width: 300px"
			src="../../imgs/plant/fern.jpg"
		/>
		<img
			v-if="props.plant.type === PlantType.Pothos"
			data-test-id="pothos-image"
			style="width: 300px"
			src="../../imgs/plant/pothos.jpg"
		/>
		<img
			v-if="props.plant.type === PlantType.Rosemary"
			data-test-id="rosemary-image"
			style="width: 300px"
			src="../../imgs/plant/rosemary.jpg"
		/>
		<img
			v-if="props.plant.type === PlantType.SnakePlant"
			data-test-id="snake-plant-image"
			style="width: 300px"
			src="../../imgs/plant/snake-plant.jpg"
		/>
		<img
			v-if="props.plant.type === PlantType.SpiderPlant"
			data-test-id="spider-plant-image"
			style="width: 300px"
			src="../../imgs/plant/spider-plant.jpg"
		/>
		<img
			v-if="props.plant.type === PlantType.ZZPlant"
			data-test-id="zz-plant-image"
			style="width: 300px"
			src="../../imgs/plant/zz-plant.jpg"
		/>
	</div>
</template>
