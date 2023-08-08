
const clothes = {
    'Мужская': ['Брюки', 'Рубашки', 'Галстуки'],
    'Женская': ['Юбки', 'Платья', 'Блузки'],
    'Детская': ['Брюки', 'Куртки', 'Перчатки'],
};


const categories = document.getElementsByClassName('category');
const products = document.getElementById('products');
const productListElement = document.getElementById('product-list');
const productDetailsElement = document.getElementById('infobox');
const buyButton = document.getElementById('buy-button');
let selProduct = '';

function showProducts(category) {
    productListElement.innerHTML = '';
    const products = clothes[category];
    products.forEach((product) => {
        const listItem = document.createElement('option');
        listItem.innerText = product;
        productListElement.appendChild(listItem);
    });

}

Array.from(categories).forEach((element) => {
    element.addEventListener('click', (event) => {
        const category = event.target.innerText;
        showProducts(category);
    });
});

productListElement.addEventListener('click', (event) => {
    const product = event.target.innerText;
    selProduct = product;
    productDetailsElement.innerText = 'You choose: ' + product;
    buyButton.style.display = 'block';

});

buyButton.addEventListener('click', () => {
    alert('You bought ' + selProduct);
    productDetailsElement.innerText = '';
    productListElement.innerHTML = '';
    buyButton.style.display = 'none';
});

