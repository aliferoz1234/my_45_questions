// 43.Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great added to each magician’s name.

// 1st Method

// let magician:string[]=["Henry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
// function copyArray(arr:string[]){
//     return[...arr]

// }
// function make_great(magician:string[]){
//     for(let i=0;i<magician.length;i++){
//       magician[i]= "the Great " +magician[i]
//     }

// }
// function show_magicians(magician:string[]){
//     for(let i=0;i<magician.length;i++){
//         console.log(magician);
//     }

// }
// const copymagicianArray=copyArray(magician)
// make_great(copymagicianArray);

// console.log("\n\nThis is my original aaray")
// show_magicians(magician);

// console.log("\n\nThis is my modified copy of the aaray")
// show_magicians(copymagicianArray);


// 2nd Method
let magician:string[]=["Henry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
function copyArray(arr:string[]){
    return[...arr]

}

function make_great(magician:string[]){
    for(let i=0;i<magician.length;i++){
      magician[i]= "the Great " +magician[i]
    }

}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);  
    });
        
    }
const copymagicianArray=copyArray(magician)
make_great(copymagicianArray);

console.log("\n\nThis is my original aaray")
show_magicians(magician);

console.log("\n\nThis is my modified copy of the aaray")
show_magicians(copymagicianArray);