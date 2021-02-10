const products =
    [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg",]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"]
        },
        {
            id: 8,
            price: 78,
        },
    ];
// Отбираем те массивы, где есть элемент photos
const productPhotos = products.filter(item => item.photos);
// Из полученного результата теперь отбираем те элементы, где
// элемент photos не пустой.
const finalPhotos = productPhotos.filter(item => item.photos.length > 0);
console.log(finalPhotos);


const sortedPrice = products.sort(function (a, b) {
    return a.price - b.price

}
);

console.log(sortedPrice);

