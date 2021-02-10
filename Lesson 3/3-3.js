const products = [ 
    {
        id: 3, 
        price: 200, 
}, 
    { 
        id: 4, 
        price: 900, 
}, 
    { 
        id: 1, 
        price: 1000, 
}, 
];

function priceDecrease(item) {
    item.price = item.price/100*85;
}

products.forEach(priceDecrease);
console.log(products);