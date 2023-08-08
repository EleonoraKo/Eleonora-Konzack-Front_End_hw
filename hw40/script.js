
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
const form = document.getElementById('form');
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

buyButton.addEventListener('click', ( ) => {
    //alert('You bought product');
    form.style.display = 'block';
    //productDetailsElement.innerText = '';
    productListElement.innerHTML = '';
    buyButton.style.display = 'none';
});


function showOrder(){
    const pib = document.getElementById('pib');
    const place = document.getElementById('city');
    const sklad = document.getElementById('sklad');
    const payment = document.getElementById('payment');
    const quantity = document.getElementById('quantity');
    const comment = document.getElementById('comment');

    document.write('<h1>Your order is received: </h1>');
    document.write('Product: ' + selProduct + '<br>');
    document.write('PIB: ' + pib.value + '<br>');
    document.write('Place: ' + place.value + '<br>');
    document.write('Sklad: ' + sklad.value + '<br>');
    document.write('Payment: ' + payment.value + '<br>');
    document.write('Quantity: ' + quantity.value + '<br>');
    document.write('Comment: ' + comment.value + '<br>');
}
