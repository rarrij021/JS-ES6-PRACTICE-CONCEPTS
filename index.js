//let and const
let time = 11.59;
console.log(time);

const usn = 72;
console.log(usn);

//arrow function

const flowers = () => {
  console.log("every flower is a soul blossoming in nature");
};
flowers();

//reset and spread operator(...)

const numbers = [2, 6, 8, 10, 12];
console.log(Math.max(...numbers));

//destructing arrays

const continents = [
  "Africa",
  "Antartica",
  "Asia",
  "Europe",
  "North America",
  "Ocenia",
  "South America",
];
console.log(continents[0], continents[5]);

const mostPopulated = continents[2];
const leastPopulated = continents[1];
console.log(continents[2], continents[1]);

//destructing objects

const userdata = { username: "Rajeshwari", age: 19 };
const name = userdata.username;
const age = userdata.age;
console.log(name, age);

//templete literals

const myfriendname = "_Jungkook";
const greeting = "Happiest birthday" + myfriendname;
console.log(greeting);
