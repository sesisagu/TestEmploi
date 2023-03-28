//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
    if(fizzbuzz %3 == 0){
        print("fizz");
    }
    else{

        if(fizzbuzz %5  == 0){
                print("buzz");
            }
        else{
            if(fizzbuzz %3 == 0 && fizzbuzz %5 == 0){
                print("fizzbuzz");
            }
            else{
                print("number");
        }
    }
    }
};

module.exports = { fizzbuzz: fizzbuzz };
