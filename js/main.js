// Stampo numeri da 1 a 100
// per i multipli di 3 stampo fizz
// per i multipli di 5 stampo buzz
// per i numeri simili tra loro stampo fizzbuzz

var numeri = '';

for (var i = 1; i <= 100; i++) {
     console.log(i);
     numeri = numeri + ' ' + i;
     // var multiplo3 = 3 * i;
     // var multiplo5 = 5 * i;

}

// if (i.includes(multiplo3)) {
//      document.getElementById('id').innerHTML = ('fizz');
// }

document.getElementById('id').innerHTML = numeri;
