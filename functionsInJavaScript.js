

function printMe() {
    console.log("printing...");
} //function defined; logic is written inside curly braces

printMe() //calls function

function printThis(param){
    console.log(param);
} //the prameter is what you put in the parentheses

printThis('tapas') /* passing a value to the function 
and the value is mapped to the parameter; anything passes
inside the parentheses is a parameter, but
when you call the function, the value you pass to the 
function is an argument*/

/* expressions*/

const printNow = function() {
    console.log('print');
}
const printAgain = function() {
    console.log('print')
}
printAgain()

const printParam = function(a, b) {
    console.log(a,b);
}
printParam(10, 30);


