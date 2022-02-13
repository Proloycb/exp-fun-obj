// var i = 0;
// while (i<10) {
//     console.log (i);
//     if (i==5){
//         break;
//     }
//     i++;
// }

// for (i=0; i<=10; i++) {
//     if (i==6){
//         break;
//     }
//     console.log (i);
// }

var array = [23, 25, 56, 78, 90, 103]

// for (i=0; i<array.length; i++){
//     var arrayItems = array[i];
//     if(arrayItems> 90) {
//         break;
//     }
//     console.log(arrayItems);
// }

for (i=0; i<array.length; i++) {
    var arrayItems = array[i];
    if(arrayItems > 78) {
        continue;
    }
    console.log(arrayItems);
}
