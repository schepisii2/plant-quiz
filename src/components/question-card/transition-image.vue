<script setup>
import { eatQuestion, pestQuestion } from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['question']);
</script>
<template>
	<div class="d-flex justify-content-center m-2">
		<img
			v-if="props.question.position === eatQuestion.position"
			style="width: 300px"
			src="../../imgs/pizza.jpg"
		/>
		<img
			v-if="props.question.position === pestQuestion.position"
			style="width: 300px"
			src="../../imgs/door-rustling.jpg"
		/>
	</div>
</template>
