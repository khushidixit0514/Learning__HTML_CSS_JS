console.log("this is module")
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

// module.exports = average;

module.exports ={
    avg:average,
    name: "harry",
    channek:"cwh"
 } 
 console.log("i am in module wala folder!")