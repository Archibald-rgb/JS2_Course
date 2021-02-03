import { CartItem } from "./CartItem.js";

export const Cart = {
	inject: ['API', 'getJson', 'postJson', 'putJson'],
	components: {
		CartItem
	},
	data() {
		return {
			cartItems: [],
			showCart: false,
			imgCart: 'https://placehold.it/50x100',
			cartUrl: '/getBasket.json',
		}
	},
	methods: {
		addProduct(product) {
			let find = this.cartItems.find(el => el.id_product === product.id_product);
			if (find) {
				this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
					.then(data => {
						if (data.result) {
							find.quantity++
						}
					});
				return;
			}

			let prod = Object.assign({ quantity: 1 }, product);
			this.postJson('api/cart/', prod)
				.then(data => {
					if (data.result) {
						this.cartItems.push(prod);
					}
				});
		},
		deletProduct(product) {
			this.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
				.then(data => {
					if (data.result) {
						if (product.quantity > 1) {
							product.quantity -= 1;
						} else {
							this.cartItems.splice(this.cartItems.indexOf(product), 1);
						}
					}
				});
		},
	},
	mounted() {
		this.getJson(`/api/cart`)
			.then(data => {
				if (!data) {
					return;
				}
				for (let product of data.contents) {
					this.cartItems.push(product);
				}
			});
	},
	template: ` <button class="btn-cart" @click="showCart = !showCart">Корзина</button>
							<div class="cart-block" v-show="showCart">
								<h2 v-if="!cartItems.length">Корзина пуста</h2>
								<CartItem v-for="el of cartItems" 
								:key="el.id_product"
								:img="imgCart"
								:product="el">
								</CartItem>
							</div>`
}