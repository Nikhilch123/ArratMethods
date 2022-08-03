//Array mrthod implementation by using methods
// length property( arrayname.lenght) ex:
console.log('array examples');

// by using assignment oprator we canchange the elements in array

var a=[10,20,30,40,50]
a[0]=0
console.log(a) 

/*delet the elemnt by using delete 
delete a[2]
console.log(a)

const marks=[34,23,24,93,73];
 const fruits=['orange','apple','kiwi'];
 const mixed=['str', 89, [3,5]];

const arr = new Array(23,123,21,'orange');
console.log(arr);
 console.log(mixed);
 console.log(fruits[1]);*/

// console.log(arr.length)//find the length of array

/*arr[0] = 'nikhil'
let arreElement = arr[0];
console.log('elemnt:', arreElement);
console.log(arr);

Push methods 
 addng  the element in last 
const marks=[20,30,40,50,60]
marks.push(70);
console.log(marks); 

unshift mthod -> element added in fisrst 
const marks=[20,30,40,50]
marks.unshift(10);
console.log(marks)

// sift method by using we can remove the frst elememnt of index

const marks=[20,30,40,50]
marks.shift();
console.log(marks); 

 pop mthod is using to dlete the last element in index 
const marks=[20,30,40,50,60]
marks.pop();// we can give the elements also
console.log(marks); */

/* by using splice if we give 1, 3  nd 1 to 3 elements are  not showing elemrnt list
const marks=[20,30,40,50,60]
marks.splice(1,3)
console.log(marks); */

/* reverse method by using  we can see the elemnts are revere ordr
const fruits=['orange','apple','kiwi'];
const cars=['Audi','Skoda','Benz'];
cars.reverse();
console.log(cars);  */

/*const marks=[20,30,40]
marks.slice(2);
console.log(marks);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(0);
console.log(fruits);*/

/*  by using concat we can add the elements in one array 
const marks=[10,20,30,40,50]
const marks2=[60,70,80]
marks.concat(marks2);
console.log(marks); */

// sort() 
//const myArray = ['Wind', 'Rain', 'Fire']
//console.log(myArray)

/* if-else 
const age=65;

 if (age == 19){
     console.age('Age  is 19')

 }
  else if(age !== 65){
     console.log('Age is 65')
 }

 else{
     console.log('Age is not 19')
 } */



 /*by using operators && or || 
 const age= 65; 
 const drive = false;

 if (drive || age>18){
    console.log(" you can drive");

 }
 else{
    console.log(" you canot drive");
 }*/
 
/*let myjoin  = ["nik", "hil"];
console.log(myjoin);
console.log(myjoin.join());*/



/* srting methods in java script -> it will give result of first match value
indexOf()
const a = ['a', 'b', 'a', 'b', 'a']
console.log(a.indexOf('b'))
console.log(a.indexOf('d')) tis value be -1, why beacuse out of the index value */

/*lastIndeoxOF() -> it will give last value of index 

const a = ['a','b','c','d','a','b','a']
console.log(a.lastIndexOf('b'))
console.log(a.lastIndexOf('b','4'))*/

/*forEach block 

const a= ['a','b','c']
a.forEach(function(element){
    console.log(element)

}) */
 
/* map
const a1 =['a','b','c','d']
const a2 =a1.map(function(leter){ return
    leter.toUpperCase()})
     console.log(a2)


     const a1 = ['A', 'B', 'C']
     const a2 = a1.map(function(item) {return item.toLowerCase })
      console.log(a2) */
/* reduce 
const a = [10, 20, 30]
const total = a.reduce(function(accumulator, currentValue)
 { return accumulator + currentValue }, 0)
console.log(total)*/
