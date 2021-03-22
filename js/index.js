// Iteration 1 - 1.4
let hacker1 = 'Ola';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Fin';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length) {
  console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`);
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3.1

// Solution 1
const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

// Solution 2
let driver = "Ola";
let newDriverName = "";

for (let i = 0; i < driver.length; i++){
  newDriverName += driver[i] + " ";
}
console.log(newDriverName.toUpperCase());

// Iteration 3.2
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(hacker2));

// Iteration 3.3
if (hacker1[0] < hacker2[0]){
  console.log(`The driver's name goes first. `)
}else if(hacker2[0] < hacker1[0]){
  console.log(`Yo, the navigator goes first definitely.`)
}else{
  console.log(`What?! You both have the same name?`)
}
