const fakeApi: string = 'https://dummyjson.com/products';
const myApi: string = 'http://localhost:4400/api/products';

const list: Element | null = document.querySelector('.product-list');
const loadBtn: HTMLButtonElement | null = document.querySelector('.load-btn');

type Page = {
    skip: number,
    limit: number,
    next: () => void
}

const pagination: Page = {
    skip: 0,
    limit: 50,
    next() {
        this.skip += this.limit;
    }
}

async function loadProducts(url: string) {

    let res: Response = await fetch(url + `?skip=${pagination.skip}&limit=${pagination.limit}`);
    let data: any = await res.json();   // TODO: type the result (avoid any)
    let products: any = data.products;

    pagination.next();

    console.log(products);

    if (list === null) return;

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

if (loadBtn !== null) {
    loadBtn.onclick = () => {
        loadProducts(fakeApi);
    }
}

loadProducts(fakeApi);
