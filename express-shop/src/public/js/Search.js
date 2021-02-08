export const Search = {
	data() {
		return {
			searchMsg: ''
		}
	},
	computed: {
		getRegExp() {
			return new RegExp(this.searchMsg, 'i');
		}
	},
	template: `<form action="#" class="search-form" @submit.prevent="">
							<input v-model.lazy="searchMsg" type="text" class="search-field">
							<button class="btn-search" type="submit">
							<i class="fas fa-search"></i>
							</button>
						</form>`
};