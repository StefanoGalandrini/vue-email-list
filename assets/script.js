const app = Vue.createApp({
	data() {
		return {
			randomEmail: "",
			emailArray: [],
		};
	},

	methods: {
		getRandomEmail(n) {
			this.emailArray.length = 0;
			for (i = 0; i < n; i++) {
				axios
					.get(
						"https://flynn.boolean.careers/exercises/api/random/mail",
					)
					.then((email) => {
						this.randomEmail = email.data.response;
						this.emailArray.push(this.randomEmail);
					});
			}
		},
	},

	created() {
		axios
			.get("https://flynn.boolean.careers/exercises/api/random/mail")
			.then((email) => (this.randomEmail = email.data.response));
	},
});

app.mount("#container");
