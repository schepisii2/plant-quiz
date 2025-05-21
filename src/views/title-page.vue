<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['start']);
</script>

<template>
	<div class="d-flex flex-column align-items-center">
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
			@click="emits('start')"
		>
			Take the quiz <font-awesome-icon icon="arrow-right" />
		</button>
	</div>
</template>
