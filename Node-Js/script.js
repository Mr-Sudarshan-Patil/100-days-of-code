// let run =5;

// for(let i=1; i<=run; i++){
//     console.log("hello", i);
// }

let argv= process.argv;

for(let i=0; i<argv.length; i++){
    console.log("Arg", argv[i]);
}