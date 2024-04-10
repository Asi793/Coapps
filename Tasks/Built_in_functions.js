// String functions
let str = "Hello, Team";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.indexOf("Team"));
console.log(str.split(", "));
console.log(str.replace("World", "Universe"));

// Number functions
let num = 5.793;
console.log(num.toFixed(2));
console.log(Number.isNaN(num));
console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));
console.log(Math.random());

// Array functions
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr.push(6));
console.log(arr.pop());
console.log(arr.unshift(0));
console.log(arr.shift());
console.log(arr.join("-"));
console.log(arr.slice(1, 3));

// Date functions
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());

// Function functions
function greet(name) {
  console.log("Hello, " + name + "!");
}
let greetFunction = greet;
greetFunction("Alice"); 

// Global functions
setTimeout(function () {
  console.log("This message will be logged after 2 seconds.");
}, 2000);

console.log(isNaN("hello"));
console.log(parseInt("10"));
console.log(parseFloat("10.5")); 
