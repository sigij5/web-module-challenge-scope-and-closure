/*  1. Predict the output of the code below and explain why this is the output using what you learned today. 


    The output of the code below will be undefined because the value of the variable a and b are within the function-scope, and can not be called by the console.log.

    // (function(){
    //   var a = b = 3;
    // })();
    // console.log("a defined? " + (typeof a !== 'undefined'));
    // console.log("b defined? " + (typeof b !== 'undefined'));

*/


/* 2. Write a function that would allow you to do this using a closure. 

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

*/

function createBase(number){
    return function(n){
        return number + n;
    }
}

var addSix = createBase (6);
addSix(10);
addSix(21);


