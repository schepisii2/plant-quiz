<script setup></script>

<template>
	<div class="d-flex flex-column align-items-center">
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
		>
			Take the quiz <font-awesome-icon icon="arrow-right" />
		</button>
	</div>
</template>
