// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// // console.log(sum(1, 2, 3, 4));
// // console.log(sum(1, 2, 3, 4, 5));

// function sumRest(...args) {
//     let total = 0;
//     args.forEach(num => {
//         total += num;
//     })
//     return total;
// }

// console.log(sumRest(1, 2, 3, 4));
// console.log(sumRest(1, 2, 3, 4, 5));

// Function.prototype.myBind = function(context) {
//     const bindArgs = Array.from(arguments).slice(1);
//     // console.log(bindArgs);
//     const that = this;
//     return function() {
//         const callArgs = Array.from(arguments);
//         console.log(callArgs)
//         return that.apply(context, bindArgs.concat(callArgs));
//     }
// }

// ES5
// Function.prototype.myBind = function(context, ...callArgs) {
//     const that = this; 
//     return function(...bindArgs) {
//         return that.apply(context, bindArgs.concat(callArgs));
//     }

// };

// ES6
Function.prototype.myBind = function(context, ...callArgs) {
    // const that = this; 
    return (...bindArgs) => {
        this.apply(context, bindArgs.concat(callArgs));
    }
};



function curriedSum(numArgs) {
    const numbers = [];
    // let total = 0; 

    function _curriedSum(num) {
        numbers.push(num);
        // total += num; 
        if (numbers.length === numArgs) {
            let total = numbers.reduce((acc, el) => (acc + el))
            // console.log(total)
            return total; 
        }else {
            return _curriedSum; 
        }
    }
    return _curriedSum;
}


const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56
// console.log(sum)

// Function.prototype.curry = function(numArgs) {
//     const numbers = [];
//     let that = this;
//     function _curry(arg) {
//         numbers.push(arg);
//         if (numbers.length === numArgs) {
//             return that.apply(null, numbers);
//         } else {
//             return _curry;
//         }
//     }
//     return _curry;
// }

Function.prototype.curry = function (numArgs) {
    const numbers = [];
    // let that = this;
    const _curry = (arg) => {
        numbers.push(arg);
        if (numbers.length === numArgs) {
            return this(...numbers);
        } else {
            return _curry;
        }
    }
    return _curry;
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
