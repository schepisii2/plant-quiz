<script setup>
import { computed, defineProps, watch, ref } from 'vue';

const props = defineProps({
	snakePlant: Number,
	zzPlant: Number,
	pothos: Number,
	fern: Number,
	rosemary: Number,
	spiderPlant: Number,
});
const totalValues = computed(() => {
	return (
		props.spiderPlant +
		props.rosemary +
		props.fern +
		props.pothos +
		props.zzPlant +
		props.snakePlant
	);
});

let plant = 'Spider Plant';
const score = ref(props.spiderPlant);
function getResults() {
	if (props.rosemary > score.value) {
		plant = 'Rosemary';
		score.value = props.rosemary;
	}
	if (props.fern > score.value) {
		plant = 'Fern';
		score.value = props.fern;
	}
	if (props.pothos > score.value) {
		plant = 'Pothos';
		score.value = props.pothos;
	}
	if (props.zzPlant > score.value) {
		plant = 'ZZ Plant';
		score.value = props.zzPlant;
	}
	if (props.snakePlant > score.value) {
		plant = 'Snake Plant';
		score.value = props.snakePlant;
	}
}

watch(
	(props.snakePlant,
	props.zzPlant,
	props.pothos,
	props.fern,
	props.rosemary,
	props.spiderPlant),
	getResults,
);
</script>
<template>
	<div class="d-flex flex-column align-items-center">
		<h1 class="my-3" data-test-id="results-title" style="color: seagreen">
			You are {{ ((score / totalValues) * 100).toFixed(1) }}% {{ plant }}
		</h1>
		<h3 class="my-2" data-test-id="results-scorecard" style="color: seagreen">
			Results
		</h3>
		<div data-test-id="snake-plant-percentage" style="color: seagreen">
			Snake Plant: {{ ((snakePlant / totalValues) * 100).toFixed(1) }}%
		</div>
		<div data-test-id="zz-plant-percentage" style="color: seagreen">
			ZZ Plant: {{ ((zzPlant / totalValues) * 100).toFixed(1) }}%
		</div>
		<div data-test-id="pothos-percentage" style="color: seagreen">
			Pothos: {{ ((pothos / totalValues) * 100).toFixed(1) }}%
		</div>
		<div data-test-id="fern-percentage" style="color: seagreen">
			Fern: {{ ((fern / totalValues) * 100).toFixed(1) }}%
		</div>
		<div data-test-id="rosemary-percentage" style="color: seagreen">
			Rosemary: {{ ((rosemary / totalValues) * 100).toFixed(1) }}%
		</div>
		<div data-test-id="spider-plant-percentage" style="color: seagreen">
			Spider Plant: {{ ((spiderPlant / totalValues) * 100).toFixed(1) }}%
		</div>
	</div>
</template>
