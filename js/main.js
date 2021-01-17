
class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let { title, price = 0, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
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
        this._fetchData();
        this._render();
    }

    init() { }

    _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Keyboard', price: 200 },
            { id: 3, title: 'Mouse', price: 100 },
            { id: 4, title: 'Gamepad' },
        ];
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }

    totalValue() {
        let sum = 0;
        for (let item of this.products) {
            sum += item.price;
        }
        return sum;
    }
}

const list = new ProductsList();

class Cart {
    constructor() {
        // userId - уникальный id покупателя
        // productList - массив купленных товаров
        // container - html контейнер
    }
    // addProduct() - метод для добавления товара в productList 
    // totalPrice() - метод для подсчета стоимости корзины

}

class PurchasedProduct {
    constructor() {
        // title - название товара
        // price - цена товара
        // id - id товара
        // amount - количество
    }

    // _render() - метод для генерации html кода товара
}

