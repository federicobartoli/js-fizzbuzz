// Stampo numeri da 1 a 100
// per i multipli di 3 stampo fizz
// per i multipli di 5 stampo buzz
// per i numeri simili tra loro stampo fizzbuzz

var numeri = '';

for (var i = 1; i <= 100; i++) {
     // console.log(i);
     // numeri = numeri + ' ' + i;
     divisibilePer3 = i % 3;
     divisibilePer5 = i % 5;
     if (divisibilePer3 == 0 && divisibilePer5 == 0){
          numeri = numeri + ' fizzbuzz';
     }
     else if (divisibilePer5 == 0) {
          numeri = numeri + ' buzz' ;
     }
     else if (divisibilePer3 == 0) {
          numeri = numeri + ' fizz';
     }
     else {
          numeri= numeri + ' ' + i;
     }
     // console.log(divisibilePer3);
     // console.log(divisibilePer5);
}
document.getElementById('id').innerHTML = numeri;
