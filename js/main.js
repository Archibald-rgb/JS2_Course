
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getData = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> new ActiveXObject();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status !== 200) {
//                 console.log('error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     }
// };
let getData = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        }
    })
};


class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let { product_name, price = 0, id_product } = product;
        this.title = product_name;
        this.img = img;
        this.price = price;
        this.id = id_product;
        this.rendered = false
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData()
            .then(() => this._render());
    }

    init() { }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = data;
                for (let dataEl of this.data) {
                    const product = new Product(dataEl);
                    this.products.push(product);
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const list = new ProductsList();
console.log(list.calcSum());

class PurchasedProduct {
    constructor() {
        // title - название товара
        // price - цена товара
        // id - id товара
        // amount - количество
    }

    // _render() - метод для генерации html кода товара
}

class Cart {
    constructor(container = '.cart') {
        // name - свойство в котором лежит имя
        this.container = document.querySelector(container);
        this.purchasedProducts = [];

    }
    // id получаем от кнопки купить товар
    addPurchasedProduct(id, productsList) {
        for (let product of productsList) {
            if (id === product.id) {
                const purchasedProduct = new PurchasedProduct(product);
                this.purchasedProducts.push(purchasedProduct);
            }
        }
    }

    deletePurchasedProduct(id) {
        let removableInd = purchasedProducts.findIndex(product => product.id === id);
        if (removableInd != -1) {
            this.purchasedProducts.splice(removableInd, 1);
        }
    }

    getPurchasedProducts() {
        return this.purchasedProducts;
    }

    // render() html код
}


