<script setup>
import { PlantType } from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['plant']);
</script>
<template>
	<div class="d-flex justify-content-center m-2">
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
	</div>
</template>
