"use strict";
// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
// 1st Method
let magician = ["Henry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
}
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician);
    }
}
make_great(magician);
show_magicians(magician);
// 2nd Method
// let magician:string[]=["Henry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
// function make_great(magicianArray:string[]){
//     for(let i=0;i<magicianArray.length;i++){
//       magician[i]= "the Great " +magicianArray[i]
//     }
// }
// function show_magicians(magicians:string[]){
//     magicians.forEach(element => {
//         console.log(element);  
//     });
//     }
// make_great(magician);
// show_magicians(magician);
