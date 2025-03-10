<script setup>
const answers = [
	'I have the best ideas in the shower.',
	'I need caffiene! Heading to a local coffee shop.',
	'Time to a quick snack. To the kitchen!',
];
</script>
<template>
	<div class="my-4 m-2" style="color: seagreen">
		<h3>Where do you go to brainstorm?</h3>
	</div>
	<div class="d-flex flex-column">
		<button
			v-for="answer in answers"
			v-bind:key="answer"
			class="btn btn-outline-success mx-2 my-1"
			type="button"
		>
			{{ answer }}
		</button>
	</div>
</template>
