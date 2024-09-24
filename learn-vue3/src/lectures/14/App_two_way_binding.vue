<template>
	<div>
		<h2>input value</h2>
		<!--<input type="text" v-model="inputValue" />-->
		<!--<input type="text" v-model.lazy="inputValue" />-->
		<!--<input type="text" v-model.number="inputValue" />-->
		<input type="text" v-model.trim="inputValue" />
		<!--
    :value="inputValue"
    @input="event => (inputValue = event.target.value)"
    -->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<h2>textarea value</h2>
		<textarea v-model="textAreaValue"></textarea>
		<!--
    :value="textAreaValue"
    @input="event => (textAreaValue = event.target.value)"
    -->
		<div>{{ textAreaValue }}</div>

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkBoxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkBoxValue"
			true-value="YES"
			false-value="NO"
		/>
		<!--
    :checked="checkBoxValue"
    @change="event => (checkBoxValue = event.target.checked)"
    -->

		<h3>checkbox Values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkBoxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkBoxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkBoxValues" />
			JavaScript
		</label>
		<div>{{ checkBoxValues }}</div>

		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			<!--
      :checked="radioValue === '0'"
      @change="event => (radioValue = event.target.value)"
      -->
			0형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			<!--
        :checked="radioValue === 'A'"
        @change="event => (radioValue = event.target.value)"
      -->
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>

		<h2>select value</h2>
		<select v-model="selectValue">
			<!--
      :value="selectValue"
      @change="event => (selectValue = event.target.value)"
      -->
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>
			{{ selectValue }}
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textAreaValue = ref('');
		const checkBoxValue = ref('YES');
		const checkBoxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textAreaValue,
			checkBoxValue,
			radioValue,
			selectValue,
			checkBoxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
