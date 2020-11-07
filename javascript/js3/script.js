//1
var i=3,j=2,sum;

res="Задание 1: Список простых чисел от 1 до 100: 2 "
while  (i<=100) {
    sum=0;
    j=2; 
    while ( j<i){
        if (i % j == 0) { sum=1;}
        j++;
    }
if (sum!=1) {res=res+" "+i;}
i++;
}
alert(res);

//2..3
cart=[
 { title: "Товар1",
  price:100,
  count:3
},
{ title: "Товар1",
price:100,
count:3
}  ,{ title: "Товар1",
price:100,
count:3
}
];
var cost=0;
function countBasketPrice(cart) {
    for (item of cart) {
        cost = cost + (item.price * item.count);
    }
    alert("Стоимость товаров в корзине равна "+cost);
}
countBasketPrice(cart);
//4
for (let i = 0; i < 10; console.log(i), i++) {}
//5
pyramyd = [];
var x = "x";
for (var i = 0; i < 20; i++){
    pyramyd.push(x);
    x += "x";
    console.log (pyramyd[i]);
}
