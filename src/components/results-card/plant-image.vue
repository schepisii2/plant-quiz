<script setup>
import { PlantType } from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['plant']);
</script>
<template>
	<img
		v-if="props.plant.type === PlantType.Fern"
		style="width: 300px"
		src="../../imgs/plant/fern.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.Pothos"
		style="width: 300px"
		src="../../imgs/plant/pothos.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.Rosemary"
		style="width: 300px"
		src="../../imgs/plant/rosemary.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.SnakePlant"
		style="width: 300px"
		src="../../imgs/plant/snake-plant.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.SpiderPlant"
		style="width: 300px"
		src="../../imgs/plant/spider-plant.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.ZZPlant"
		style="width: 300px"
		src="../../imgs/plant/zz-plant.jpg"
	/>
</template>
