<script setup>
import {
	badDayQuestion,
	doorOpenQuestion,
	doorQuestion,
	eatQuestion,
	mitesQuestion,
	pestQuestion,
	showerQuestion,
} from '../../data';
import { defineProps } from 'vue';

const props = defineProps(['question']);
</script>
<template>
	<div class="d-flex justify-content-center m-2">
		<img
			v-if="props.question.position === showerQuestion.position"
			style="width: 300px"
			src="../../imgs/shower.jpg"
		/>
		<img
			v-if="props.question.position === badDayQuestion.position"
			style="width: 300px"
			src="../../imgs/pilea-text.jpg"
		/>
		<img
			v-if="props.question.position === doorOpenQuestion.position"
			style="width: 300px"
			src="../../imgs/open-door.jpg"
		/>
		<img
			v-if="props.question.position === mitesQuestion.position"
			style="width: 300px"
			src="../../imgs/mite.jpg"
		/>
		<img
			v-if="props.question.position === eatQuestion.position"
			style="width: 300px"
			src="../../imgs/pesticide.jpg"
		/>
		<img
			v-if="props.question.position === pestQuestion.position"
			style="width: 300px"
			src="../../imgs/scary-pest.jpg"
		/>
		<img
			v-if="props.question.position === doorQuestion.position"
			style="width: 300px"
			src="../../imgs/door-rustling.jpg"
		/>
	</div>
</template>
