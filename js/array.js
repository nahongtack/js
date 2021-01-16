'use strict';

// array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array 
// print all fruit
// a. for
console.clear();
for(let i = 0 ; i < fruits.length ; i++ ){
  console.log(fruits[i]);
}

// b. for of 
for(let fruit of fruits){
  console.log(fruit);
}

// c. foreach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy 
// note!! shift, unshift are slower than push, pop 
// push : add an item to the end
fruits.push('🍇','🍓');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍓', '🍇');
console.log(fruits);

// shift : remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// splice : remove an item by index position
console.clear();
fruits.push('🍓','🍑','🍐');
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,1,'🍏','🥭');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥝','🥥'];
const newFruits = fruits.concat(fruits2); 
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // index 값 0 출력
console.log(fruits.indexOf('🥭'));  // index 값 2 출력
console.log(fruits.indexOf('🍌'));  // index 값 -1(없음) 출력

// include
console.log(fruits.includes('🥭')); // 값이 배열에 존재하기 떄문에 true 출력
console.log(fruits.includes('🍌')); // 값이 배열에 존재하지 않기때문에 false 출력

// lastIndexOf
console.clear();
fruits.push('🥭');  // 안에 있는 값 중 하나 입력
console.log(fruits.indexOf('🥭'));      // 해당값의 처음 자리 2 출력
console.log(fruits.lastIndexOf('🥭'));  // 해당값의 마지막 자리 4 출력
