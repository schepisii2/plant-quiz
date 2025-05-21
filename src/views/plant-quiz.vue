<script setup>
import { ref } from 'vue';
import TitlePage from './title-page.vue';
import QuestionCard from '../components/question-card/question-card.vue';
import ResultsCard from '../components/results-card/results-card.vue';
import { updateValues } from '../helpers/plant-helper';
const quizStarted = ref(false);
const showResults = ref(false);
</script>

<template>
	<div style="background-color: whitesmoke; color: seagreen">
		<title-page v-if="!quizStarted" @start="quizStarted = true" />
		<div v-else-if="!showResults">
			<question-card @done="showResults = true" @values="updateValues" />
		</div>
		<results-card v-else />
	</div>
</template>
