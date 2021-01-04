// function declaration/function statement
//these functions get hoisted to the top and are given memory in the heap before execution pahse begins
function disp_a(a){
    console.log(a);
}

disp_a(5);

var obj = new Object();
console.log(obj);

obj.calc = function(){console.log(1);}

//function expresssion
//these function does not get hoisted to the top and only gets memory when the compiler reaches that line of code
var exp = function(a){
    console.log(a);
}

exp(6);

//anonymous function
//these are the type of function that does not have a name and are used to execute the piece of code only once
//this specific one is called as iife(you  can name an  iife if u want)
(function(a){
    console.log(a);
})();

//callback function
//these are the fuctions that are passed inside another function's argument and are called by that function and not by the user
//used in event handling

function handle(callback){
    callback(3);
}

handle(disp_a);

//returning a function and how to pass value for function that is nested inside
(cal = function(a){
    return function(b){
        return a + b;
    }
})
console.log(cal);
console.log(cal(3)(4));

(calc = function(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
})

console.log(calc(3)(2)(1));

/******
 * okay so when we create a new object in js we do it like this ---->
 * var object_name = new Object();---> the thing is that Object() is a function and every function has a prototype property
 * so we can basically create our own function and pass it in place of object() function
 * and the function that we pass can have properties and methods that are defined by us
 * and these properties and methods get inherited by the new object that we defined ;)
 */