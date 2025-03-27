<script setup>
import { ref } from 'vue';
import QuestionCard from '../components/question-card/question-card.vue';
import ResultsCard from '../components/results-card/results-card.vue';
import { updateValues } from '../helpers/plant-helper';
const quizStarted = ref(false);
const showResults = ref(false);
</script>

<template>
	<div style="background-color: whitesmoke; color: seagreen">
		<div v-if="!quizStarted" class="d-flex flex-column align-items-center">
			<div class="my-4" data-test-id="plant-quiz-title">
				<h1>Plant Quiz <font-awesome-icon icon="seedling" /></h1>
			</div>
			<div data-test-id="plant-quiz-description">
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
		<results-card v-else data-test-id="results-card" />
	</div>
</template>
