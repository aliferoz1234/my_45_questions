// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array

// 1st Method
let magician:string[]=["Henry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

function show_magicians(magicians:string[]){
    for(let i=0;i<magician.length;i++){
        console.log(magician);
    }

}
show_magicians(magician);

// 2nd Method
// let magician:string[]=["Henry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

// function show_magicians(magicians:string[]){
//     magicians.forEach(element => {
//         console.log(element);  
//     });
        
//     }

// show_magicians(magician);