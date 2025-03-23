<script setup>
import { ref } from 'vue';
import QuestionCard from '../components/question-card.vue';
import ResultsCard from '@/components/results-card.vue';
import { PlantType } from '../data/questions';
const quizStarted = ref(false);
const showResults = ref(false);

const spiderPlant = ref(0);
const rosemary = ref(0);
const fern = ref(0);
const pothos = ref(0);
const zzPlant = ref(0);
const snakePlant = ref(0);
function updateValues(values) {
	if (values.includes(PlantType.SpiderPlant)) {
		spiderPlant.value++;
	}
	if (values.includes(PlantType.Rosemary)) {
		rosemary.value++;
	}
	if (values.includes(PlantType.Fern)) {
		fern.value++;
	}
	if (values.includes(PlantType.Pothos)) {
		pothos.value++;
	}
	if (values.includes(PlantType.ZZPlant)) {
		zzPlant.value++;
	}
	if (values.includes(PlantType.SnakePlant)) {
		snakePlant.value++;
	}
}
</script>

<template>
	<div v-if="!quizStarted" class="d-flex flex-column align-items-center">
		<div class="my-4" data-test-id="plant-quiz-title" style="color: seagreen">
			<h1>Plant Quiz <font-awesome-icon icon="seedling" /></h1>
		</div>
		<div data-test-id="plant-quiz-description" style="color: seagreen">
			What kind of houseplant are you?
		</div>
		<button
			data-test-id="start-quiz-button"
			class="btn btn-outline-success my-3"
			type="button"
			@click="quizStarted = true"
		>
			Take the quiz <font-awesome-icon icon="arrow-right" />
		</button>
	</div>
	<div v-else-if="!showResults">
		<question-card
			data-test-id="question-card"
			@done="showResults = true"
			@values="updateValues"
		/>
	</div>
	<results-card
		v-else
		:snake-plant="snakePlant"
		:zz-plant="zzPlant"
		:pothos="pothos"
		:fern="fern"
		:rosemary="rosemary"
		:spiderPlant="spiderPlant"
	/>
</template>
