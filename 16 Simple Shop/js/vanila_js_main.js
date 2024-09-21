const fakeApi = 'https://dummyjson.com/products';
const myApi = 'http://localhost:4400/api/products';

const list = document.querySelector('.product-list');
const loadBtn = document.querySelector('.load-btn');

const pagination = {
    skip: 0,
    limit: 50,
    next() {
        this.skip += this.limit;
    }
}

async function loadProducts(url) {
    let res = await fetch(url + `?skip=${pagination.skip}&limit=${pagination.limit}`);
    let data = await res.json();
    let products = data.products;

    pagination.next();

    console.log(products);

    for (const i of products) {
        list.innerHTML += `<div class="col">
                            <div class="card h-100">
                                <img src="${i.thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${i.title}</h5>
                                    <p class="card-text">${i.price}$ Rating: ${i.rating}</p>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-primary">Add to Cart</button>
                                    <button type="button" class="btn btn-success">Buy</button>
                                </div>
                            </div>
                        </div>`
    }
}

loadBtn.onclick = () => {
    loadProducts(fakeApi);
}

loadProducts(fakeApi);
