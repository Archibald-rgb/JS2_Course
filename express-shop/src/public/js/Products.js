import { Product } from "./Product.js";

export const Products = {
	inject: ['API', 'getJson'],
	components: {
		Product
	},
	data() {
		return {
			products: [],
			imgCatalog: 'https://placehold.it/200x150',
		}
	},
	mounted() {
		this.getJson(`/api/products`)
			.then(data => {
				if (!data) {
					return;
				}
				for (let product of data) {
					this.products.push(product);
				}
			});
	},
	template: `<div class="products">
								<Product
								v-for="el of products" 
								:key="el.id_product" 
								:img="imgCatalog"
								:product="el"
								></Product>
						</div>`
};