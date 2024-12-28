// Prevent us from attempting to use variables
// that are not declared
"use strict"
console.log (2 * 2); //Output is 4 - no surprise
console.log (2 + 2); //Output is 4 - no surprise
console.log (2 + 2 / 2); //Here Output is 3 which shows that the computer is following PEMDAS
console.log (6 / 2 + 2); //Output is 5 also using PEMDAS
console.log (8 / 2 * 2 + 2); //Stupid Internet math problem without the needed paranthesis
//output is 10 - How do we tell the program to do a certain set first?

console.log (1 && 9); //Output is 9  What does this do?
console.log (9 && 2); //Output is 2 
console.log (7 && 7); //Output is 7 Your example claims thses should be boolean

console.log (5 || 6); //Output is 5
console.log (6 || 5); //Output is 6