<script setup>
import {
	firstQuestion,
	getNextQuestion,
	isLastQuestion,
} from '../../helpers/question-helper';
import QuestionImage from './question-image.vue';
import TransitionImage from './transition-image.vue';
import { ref, defineEmits, computed } from 'vue';

const currentQuestion = ref(firstQuestion);
const selectedAnswer = ref({});
const showQuestion = ref(true);

const emits = defineEmits(['done', 'values']);

const progressBarStyle = computed(() => {
	return `width: ${(currentQuestion.value.position / 21) * 100}% `;
});

function onClickAnswer(answer) {
	selectedAnswer.value = answer;
	emits('values', answer.value);
	if (isLastQuestion(currentQuestion.value)) {
		emits('done');
	} else if (currentQuestion.value.transition) {
		showQuestion.value = false;
	} else {
		continueQuiz();
	}
}

function continueQuiz() {
	showQuestion.value = true;
	currentQuestion.value = getNextQuestion(
		currentQuestion.value,
		selectedAnswer.value.variant,
	);
}
</script>
<template>
	<div class="progress">
		<div
			class="progress-bar progress-bar-striped bg-success"
			role="progressbar"
			:style="progressBarStyle"
			aria-valuenow="100"
			aria-valuemin="0"
			aria-valuemax="100"
		></div>
	</div>
	<div v-if="showQuestion" data-test-id="question-and-answers">
		<div class="my-4 m-2" style="color: seagreen">
			<question-image :question="currentQuestion" />
			<h3 data-test-id="question-text">{{ currentQuestion.question }}</h3>
		</div>
		<div class="d-flex flex-column">
			<button
				v-for="(answer, index) in currentQuestion.answers"
				v-bind:key="answer.label"
				class="btn btn-outline-success mx-2 my-1"
				type="button"
				:data-test-id="'answer-button-' + index"
				@click="onClickAnswer(answer)"
			>
				{{ answer.label }}
			</button>
		</div>
	</div>
	<div v-else>
		<div class="my-4 m-2" style="color: seagreen">
			<transition-image :question="currentQuestion" />
			<h3 data-test-id="transition-text">{{ currentQuestion.transition }}</h3>
		</div>
		<div class="d-flex flex-column">
			<button
				class="btn btn-outline-success mx-2 my-1"
				type="button"
				data-test-id="continue-button"
				@click="continueQuiz"
			>
				Continue <font-awesome-icon icon="arrow-right" />
			</button>
		</div>
	</div>
</template>
