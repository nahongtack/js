// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// 관계형데이터, 함수들의 모음이다
// Nearly all objects in JavaScript are instances of Object.
// 자바스크립트의 거의 모든 오브젝트는 오브젝트의 인스턴스 이다

// 1. Literals and properties
// 문자그대로 와 특징
const obj1 = {}; // 'object Literal' syntax 오브젝트 문자 문법 
const obj2 = new Object(); // 'object constructor' syntax 오브젝트 구성의 문법

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const hong = {name:'hongtaek', age:34};
print(hong);

// with JavaScript magic (dynamically typed language)
// 자바스크립트의 마술(다이나믹한 타입의 언어이다)
// can add properties later
// 프로퍼티에 나중에도 추가할 수 있다.
hong.hasJob = true;
console.log(hong.hasJob);

// can delete properties later
delete hong.hasJob;
console.log(hong.hasJob);

// 2. Computed properties
// key should be always string
// 키는 언제나 문자여야한다.
console.log(hong.name);
console.log(hong['name']);  // computed properties 실시간으로 원하는 키를 받아오고 싶을때나 씀
hong['hasJob'] = true;
console.log(hong.hasJob);

function printValue(obj, key){
  //console.log(obj.key);
  console.log(obj[key]);  // obj.key형태로는 못받아옴
}
printValue(hong, 'name');
printValue(hong, 'age');

// 3. Property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steave', age:3};
const person3 = {name:'dave', age:4};

// 변천사
// const person4 = {name:'hong', age:34}; object를 계속 이렇게 선언할 수 있지만, 깔끔하게 변경했을때
// const person4 = makePerson('hong',34); 함수화해서 처리
// function makePerson(name, age){return {name:name, age:age}} // 함수에서 object로 변경
// function makePerson(name, age){return {name, age=}}  // 매개변수와 같은 이름이면 :name은 없앨 수 있음

const person4 = new Person('hong',34);
console.log(person4);

// 4. constructor function
// 첫글자 대문자로 하고 그것을 new를 통해 클래스 선언하듯이 선언하면 constructor 함수가 실행됨
function Person(name, age){
  // this = {}; 자바스크립트 엔진이 알아서 변환해줌
  this.name = name; 
  this.age = age;
  // return this;
}

// 5. in operator : property existence check(key is obj)
// object안에 선언된 키가 있는지 없는지 알 수 있는 키워드
console.log('name' in hong);
console.log('age' in hong); // 있음 : true
console.log('random' in hong);  // 없음 : false
console.log(hong.random);

// 6. for..in vs for..of
// for(key in obj)
console.clear();
// object 안에 key를 순차적으로 돌면서 전부 출력해줌
for(key in hong){
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// array에 있는 밸류를 순차적으로 돌면서 뿌려줌
// for(let i = 0; i<array.length; i++){
//    console.log(array[i]);
// } 
for(value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'hong', age:'20'};
const user2 = user;
// user -> lef, user2 -> lef 이기때문에 user2.name은 같은 레퍼런스를 보기때문에 수정했을때 user.name도 변경함
user2.name = 'corder';
console.log(user);

// old way
// user안에 있는 키를 순차적으로 돌면서 user3에 담아주면 해당 레퍼런스를 참조해서 수정함
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// Object의 assign 함수를 이용해서 입력받고자하는 object와 입력하고자하는 레퍼런스가 담긴 배열을 넣어서 실행하면 복사해줌

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
// assign했을때 나중에 나오는 object를 덮어씀
const frult1 = {color:'red'};
const fruit2 = {color:'green', size:'big'};
const mixed = Object.assign({}, frult1, fruit2);
console.log(mixed.color);
console.log(mixed.size);