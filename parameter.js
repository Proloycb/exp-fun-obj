function bringSingara (taka) {
    console.log ('Singarar jonno tk dese:', taka ,'tk');
    console.log ('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 100;
var singara = bringSingara(money);
console.log ('Ai nen singara', singara, 'ta');