<script setup>
import { PlantType } from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['plant']);
</script>
<template>
	<img
		v-if="props.plant.type === PlantType.Fern"
		src="../../imgs/plant/fern.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.Pothos"
		src="../../imgs/plant/pothos.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.Rosemary"
		style="width: 300px"
		src="../../imgs/plant/rosemary.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.SnakePlant"
		src="../../imgs/plant/snake-plant.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.SpiderPlant"
		src="../../imgs/plant/spider-plant.jpg"
	/>
	<img
		v-if="props.plant.type === PlantType.ZZPlant"
		src="../../imgs/plant/zz-plant.jpg"
	/>
</template>
