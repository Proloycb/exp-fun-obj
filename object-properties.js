var computer = {
    color: 'black',
    storage: '512GB',
    price: 29000
};

// console.log (computer.storage);

var computerPrice = "price";
computer.price = 27000;
computer["price"] = 25000;
computer[computerPrice]= 23000;
console.log (computer);