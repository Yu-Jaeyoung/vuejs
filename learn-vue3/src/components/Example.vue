<template>
	<main>
		<div class="container py-4">
			<MyButton
				class="my-button"
				id="my-button-id"
				@click="sayHello"
			></MyButton>
			<LabelInput label="이름" data-id="id 입니다."></LabelInput>
			<hr />
			<FancyButton>Click!!! <span style="color: red">@@@</span></FancyButton>
			<!--<FancyButton v-slot="{ fancyMessage }"> {{ fancyMessage }}</FancyButton>-->
			<FancyButton>
				<template v-slot="{ fancyMessage }"> {{ fancyMessage }}</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!--<template #[slotArgs]> 제목 입니다.</template>-->
				<!--<template #default> 내용 입니다.</template>-->
				<!--암시적으로 default 슬롯!-->
				<!--<template #footer> 푸터 입니다.</template>-->
				<template #header="{ headerMessage }">
					디폴트입니다. {{ message }}
					<br />
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트입니다. {{ message }}
					<br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					디폴트입니다. {{ message }}
					<br />
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard> 게시글 입니다. </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		FancyButton,
		MyButton,
		LabelInput,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요 !');
		};

		const slotArgs = ref('header');

		const message = ref('hello');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
