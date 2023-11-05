/**
 * Author: Phoebe Rettberg
 * Created: 11.2.2023
 * License: Public Domain
 */


function halveValue(x){ 
    return (x/2);
}

console.log("Thanks for opening the console, lets do some math:")

console.log("What is half of 4?", halveValue(4));
console.log("What about 20?", halveValue(20));

array = [2, 6, 13, 24, 67, 98, 107, 222];
console.log("Here's my array:", array);

var results = array.map(halveValue);
console.log("Oh no! My array has been split in half!", results);
console.log("bummer... I'll try to double it again :)");

var squared = results.map(function(x){
    return (x*x);
});
console.log(squared);
console.log("that's not right either, math sucks!");


