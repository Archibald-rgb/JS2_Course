export const CartItem = {
	props: ['img', 'product'],
	template: `<div class="cart-item">
								<div class="product-bio">
									<img :src="img" :alt="product.product_name">
									<div class="product-desc">
										<p class="product-title">{{ product.product_name }}</p>
										<p class="product-quantity">Quantity: {{ product.quantity }}</p>
										<p class="product-single-price">$ {{ product.price }} each</p>
									</div>
								</div>
								<div class="right-block">
									<p class="product-price">$ {{ product.quantity*product.price }}</p>
									<button class="del-btn" @click="$parent.deleteProduct(product)">&times;</button>
								</div>
						 </div>`
};