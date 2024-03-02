//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof(myDate));

// let myCreateDate = new Date(2023, 5, 9);
// let myCreateDate = new Date("08-07-2001");
let myCreateDate = new Date("2001-01-14");
// console.log(myCreateDate.toDateString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000)); //milli seconds

