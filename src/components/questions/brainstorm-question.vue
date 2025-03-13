<script setup>
import { brainstormQuestion } from '@/data/questions';
</script>
<template>
	<div class="my-4 m-2" style="color: seagreen">
		<h3>{{ brainstormQuestion.question }}</h3>
	</div>
	<div class="d-flex flex-column">
		<button
			v-for="answer in brainstormQuestion.answers"
			v-bind:key="answer.label"
			class="btn btn-outline-success mx-2 my-1"
			type="button"
			@click="console.log(answer.value)"
		>
			{{ answer.label }}
		</button>
	</div>
</template>
