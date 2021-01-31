import { Search } from "./search.js";
import { Cart } from "./Cart.js";
import { Products } from "./Products.js";




const Shop = {
    components: {
        Search, Cart, Products
    },
    data() {
        return {
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
    },
};

Vue.createApp(Shop).mount('#app');

