<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="chargeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="chargeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp"></component>
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import DynamicApple from '@/components/DynamicApple.vue';
import DynamicBanana from '@/components/DynamicBanana.vue';
import { ref, shallowRef } from 'vue';

const currentComp = shallowRef(DynamicApple);
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: ' 고길동' });
const chargeCurrentComp = comp => (currentComp.value = comp);
</script>

<style scoped></style>
