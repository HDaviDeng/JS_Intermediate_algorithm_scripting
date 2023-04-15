/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * 
 * For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

//You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between.

//Hint 1: Use Math.max() to find the maximum value of two numbers.
//Hint 2: Use Math.min() to find the minimum value of two numbers.
//Hint 3: Remember to that you must add all the numbers in between so this would require a way to get those numbers.

//Solution 1
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}
sumAll([1, 4]);
//Code Explanation
//First create a variable to store the max number between two.
//The same as before for the Smallest number.
//We create a accumulator variable to add the numbers.
// Since the numbers might not be always in order, using max() and min() will help organize.

//Solution 2
const sumAll = arr => {
    //Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];

    //Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    //ex. There are |1-4| + 1 =4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    //Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};
//Code Explanation
//The formula for calculating the sum of a continuous range is "(startNum + endNum)*numCount/2".
//arr[0] and arr[1] can either be startNum or endNum, order doesn't matter.
//We can get the count of numbers in range by "Math.abs(arr[0] - arr[1]) + 1".
//Applying the formula by plugging in the numbers.

//Solution 3
function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}
sumAll([1, 4]);
//Code Explanation
//Creating a variable sum to store the sum of the elements.
//Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
//Using a spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements.

//Solution 4 Recursive Solution
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
        ? first + sumAll([first + 1, last])
        : first;
}
sumAll([1, 4]);
