const array = [
    {brand: 'Samsung', color: 'Black', price: 21000, model: 2022},
    {brand: 'Oppo', color: 'Silver', price: 9000, model: 2020},
    {brand: 'Walton', color: 'Red', price: 5000, model: 2021},
    {brand: 'Vivo', color: 'Blue', price: 12000, model: 2020},
    {brand: 'Nokia', color: 'Black', price: 11000, model: 2022},
    {brand: 'Xiomi', color: 'Red', price: 10000, model: 2019},
    {brand: 'Symphony', color: 'Black', price: 6000, model: 2018},
    {brand: 'Semense', color: 'Golden', price: 13000, model: 2015},
    {brand: 'Huawai', color: 'Black', price: 15000, model: 2022},
    {brand: 'MyPhone', color: 'White', price: 3000, model: 2016}
];
const findLowestPhone = array.find(x => x.price === 5000);
console.log(findLowestPhone);
console.log(findLowestPhone.brand);
console.log(findLowestPhone.price);
console.log(findLowestPhone.model);