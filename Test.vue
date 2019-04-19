<template>
	<div>
		<img src="~Icons/ok.png">
		<img :src="'~Icons/ok.png'">

		<div>========================</div>

		<div>
			<button @click="addIcon('ok')">ok icon</button>
			<button @click="addIcon('fail')">fail icon</button>
			<form @submit.prevent="addIcon(iconName)">
				<input type="text" v-model="iconName">
				<button type="submit">any icon (including subdir), without extension</button>
			</form>
			<div v-for="icon in icons">
				<img :src="require(`Icons/${icon}.png`)">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				icons: [],
				iconName: ''
			}
		},
		methods: {
			addIcon(icon) {
				this.icons.push(icon);
			}
		}
	}
</script>