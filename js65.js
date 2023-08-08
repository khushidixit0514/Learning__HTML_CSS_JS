// synchronous blocking
// line by line execute

// Asynchronous Non Blocking
// line by line execution not guranteed
// callback with fire

// nodejs works on non blocking ios mode
// mtlb execute line by line hogaa but agr phle wala ko read krke print krna h to dusra print ho jayega aur phir jb tk phle wala ka read wala kaam khtm ho jayega tbb print hoga
// a refers to error b refers to data

const fs= require("fs")
fs.readFile("dele.txt","utf-8", (a,b)=>{
    console.log(b);
});
console.log("this is a message");
