<script setup>
import { onMounted } from 'vue';
import { getUserPlant, userPlant } from '../../helpers/plant-helper';
import PlantCard from './plant-card.vue';
import ResultsScorecard from './results-scorecard.vue';

onMounted(() => getUserPlant());
</script>
<template>
	<div class="mx-4">
		<plant-card :plant="userPlant" />
		<hr />
		<results-scorecard />
	</div>
</template>
