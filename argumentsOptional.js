/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * 
 * sumTwoAnd(3) returns 5.
 * 
 * If either atgument isn't a valid number, return undefined.
 */

/**
 * Problem Explanation
 * It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:
 * - It has to add two numbers passed as parameters and return the sum.
 * - It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
 * - It has to check if it has one or two arguments passed. More are ignored.
 * - If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
 */

//Hint 1: Every time you deal with an argument, you have to check if it is defined and if it is a number.

//Hint 2: When working on the case that it needs to return a function, using closure can help you write the new function in terms of addTogether().

//Hint 3: The early return pattern can simplify your code.


//Solution 1
function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
        return undefined;
    if (arguments.length === 1)
        return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
        return undefined;
    return first + second;
}

//Solution 2
function addTogether() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof(first) !== "number") {
        return undefined;
    }
    //First argument is a number and second argument is not defined
    else if (arguments.length ===1) {
        function addSecond(second) {
            //New argument is not a number
            if (typeof(second) !== "number") {
                return undefined;
            }
            // New argument is a number
            else {
                return first + second;
            }
        }
        //Note: returning a *function*
        return addSecond;
    }
    // First argument is a number and second argument is not a number
    else if (typeof(second) !== "number") {
        return undefined;
    }
    // First argument is a number and second argument is a number
    else {
        return first + second;
    }
}

//Solution 3
function addTogether(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
        return num => {
            if (typeof num === 'number') {
                return first + num;
            }
        }
    }
    if (typeof first === 'number' && typeof second === 'number') {
        return first + second;
    }
}