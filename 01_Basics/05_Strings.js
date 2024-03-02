const name = "rohit";
const repocount = 50;

// console.log(name + repocount + " Value");

// console.log(`Hello my name is ${name} my repoCount is ${repocount}`);

const gameName = new String("Rohit-Vs");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const anime = "       One-Piece      ";
console.log(anime);
console.log(anime.trim());

const url = "https//:hitesh.com/rohit%07sonkusale";
console.log(url.replace('%07', '-'));