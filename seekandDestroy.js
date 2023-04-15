/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 * Note: You have to use the arguments object.
 */
function destroyer(arr) {
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two or more but on the script you only see two. You will remove any number from the first argument that is the same as any other arguments.

//Hint 1: You need to work with arguments as if it was a regular array. The best way is to convert it into one.
//Hint 2: You may want to use carious methods like: indexOf(), includes(), or filter(). When in doubt about any function, check those docs! 

//Solution 1
function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
                if (arr[i] === valsToRemove[j]) {
                    removeElement = true;
                }
            }
            if (!removeElement) {
                filteredArray.push(arr[i]);
            }
        }
        return filteredArray;
    }
/**
 * Code Explanation
 * 
 * 1. Create an array of ValsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. we'll use this to check against arr.
 * 
 * 2. Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. This second loop will iterate through valsToRemove.
 * /Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].
 * /If the value at the current index is equal in both arrays, let removeElement to true remove it from arr.
 * /If the value is not flagged for removal, add it the filteredArray.
 * 
 * 3. Outside of the nested loops, return the filteredArray.
 */

//Solution 2
function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}
/**
 * Code Explanation
 * 
 * 1. Declare a variable named valsTo Remove and set it equal to a new Array object from() the arguments passed into the function. Use the slice() method on the array of arguments, starting from the second index,1.
 * 
 * 2. Return the filtered array, using includes() in the callback function to check if cal is not in valsToRemove; returning true to keep the value in the original array or false to remove it.
 */

//Solution 3
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}
/**
 * Code Explanation
 * Using spread operator to retrive the arguments.
 * Return the filtered array, using includes().
 */