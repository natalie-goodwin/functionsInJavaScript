
/* The purpose of a function is to store code that will be reused again and again. You call the function 
by its name and you can reuse the code stored in the function without having to continue retyping the 
same code over and over. */

function printMe() {
    console.log("printing...");
} /*function declared/defined; logic is written inside 
curly braces*/

printMe() /*calls function*/

function printThis(param){
    console.log(param);
} /*the prameter is whatever you put inside the 
parentheses and you can have as many parameters as 
you need as long as you need them*/

printThis('tapas') /* passing a value to the function 
and the value is mapped to the parameter; anything that 
passes inside the parentheses is a parameter, but
when you call/invoke the function, the value you pass 
to the function is an argument*/

/* using function expressions*/

const printNow = function() {
    console.log('printNow');
} /*defining the function in the function expression */

printNow();

const printAgain = function() {
    console.log('printAgain')
}
printAgain()

const printParam = function(a, b) {
    console.log(a,b);
}
printParam(10, 30);

/*return from a function*/
function sum(a, b) {
return a + b;
}
sum(2,3)

function sumTwo(c,d) {
    let ret = a + b;
    return ret;
} 

function calc(a, b) {
    return (2 * (a + b)); 
}
calc(2, 3)

var num = 4; 
var anotherNum = 3;

function addNum (n1, n2) {
    return(n1 + n2);
}

function multiply(n1, n2) {
    return n1 * n2;
}

var sum = addNum(num, anotherNum);
var product = multiply(prompt("Enter a number: "), sum);
console.log(product);

function test() {
    return "hello";
}

console.log(test());

/*Below is from video:
https://www.youtube.com/watch?v=4t8Q_YLpuKw
NOTE: when you use the return make sure you put the 
return line after everything else, because otherwise
everything after the return stops working; each
return statement only returns within its own code block
as in the below function expression */

let login = function(password) {
    if (password === 'test123') {
        return 'Success!!!!!!!'
    } else {
        return 'Try Again!!!!!'
    }
}

let result = login('test123');
console.log(result);


function favNum(num) {
    return num;
}
let myFavNum = favNum(7);
console.log(`My fav number is ${myFavNum}`);

function password(a) {
    if (a.length > 8){
        return console.log (`You chose ${a}`);
    } else {
        return console.log('not enough letters')
    }
}
password('PurpleRhino123');
password('Circle77');
