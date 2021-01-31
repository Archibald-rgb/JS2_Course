import { CartItem } from "./CartItem.js";

export const Cart = {
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
			this.$root.getJson(`${this.$root.API}/addToBasket.json`)
				.then(data => {
					if (data.result) {
						let find = this.cartItems.find(el => el.id_product === product.id_product);
						if (find) {
							find.quantity++;
						} else {
							this.cartItems.push(Object.assign({ quantity: 1 }, product));
						}
					} else {
						console.log('error');
					}
				});
		},
		deletProduct(product) {
			this.$root.getJson(`${this.$root.API}/deleteFromBasket.json`)
				.then(data => {
					if (data.result) {
						if (product.quantity > 1) {
							product.quantity -= 1;
						} else {
							this.cartItems.splice(this.cartItems.indexOf(product), 1);
						}
					} else {
						console.log('error');
					}
				});
		},
	},
	mounted() {
		this.$root.getJson(`${this.$root.API + this.cartUrl}`)
			.then(data => {
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