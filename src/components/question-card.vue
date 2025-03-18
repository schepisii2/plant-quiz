<script setup>
import { firstQuestion, getNextQuestion } from '../helpers/question-helper';
import { ref } from 'vue';
const currentQuestion = ref(firstQuestion);
function onClick() {
	currentQuestion.value = getNextQuestion(currentQuestion.value);
}
</script>
<template>
	<div class="my-4 m-2" style="color: seagreen">
		<h3>{{ currentQuestion.question }}</h3>
	</div>
	<div class="d-flex flex-column">
		<button
			v-for="answer in currentQuestion.answers"
			v-bind:key="answer.label"
			class="btn btn-outline-success mx-2 my-1"
			type="button"
			@click="onClick()"
		>
			{{ answer.label }}
		</button>
	</div>
</template>
