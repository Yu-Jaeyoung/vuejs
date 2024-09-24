<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi
			consequatur, dolor eaque error illo laborum magni officia perspiciatis
			praesentium quaerat quas quia quidem recusandae, repudiandae sequi
			tenetur. Ducimus, molestias.
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);
		const styleObject = computed(() => {
			return { color: 'red', fontSize: fontSize.value + 'px' };
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
