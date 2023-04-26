//Flatten a nested array. You must account for varying levels of nesting.

//Explanation: This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.
// Array.isArray()

//Hint 1: You need to check if an element is an array or not.

//Hint 2: If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1] [index2] to go a level deeper.

//Hint 3: You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. 


//Solution 1
function steamrollArray(arr) {
    const flattenedArray = [];
    //Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            //Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};
//test here
steamrollArray([1, [2], [3, [[4]]]]);
/**
 * Create a new variable to keep flattened arrays.
 * Loop over the elements of the array
 * If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
 * If the element is not an array, then push that non-array element to the flattened array.
 * Return the flattened array.
 */

//Solution 2
function stramrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
steamrollArray([1, [2], [3, [[4]]]]);
/**
 * Use spread operator to concatenate each element of arr with an empty array
 * Use Array.some() method to find out if the new array contains an array still
 * If it does, use recursion to call steamrollArray again, passing the new array to repeat the process on the arrays that were deeply nested
 * If it does not, return the flattened array
 */

//Solution 3
function steamrollArray(arr) {
    return arr
        .toString()
        .replace(",,", ",") // "1, 2,, 3" => "1, 2, 3"
        .split(",") // ['1', '2', '3']
        .map(function(v) {
            if (v == "[object Object]") {
                // bring back empty objects
                return {};
            } else if (isNaN(v)) {
                // if not a number (string)
                return v;
            } else {
                return parseInt(v); //if a number in a string, convert it
            }
        });
}
/**
 * First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
 * We replace the double comma with one, then split it back into an array.
 * map through the array and fix object values and convert string numbers to rebular numbers.
 */

//Solution 4
function steamrollArray(vel, flatArr = []) {
    val.forEach(item => {
        if (Array.isArray(item)) steamrollArray(item, flatArr);
        else flatArr.push(item);
    });
    return flatArr;
}

//Solution 5
function steamrollArray(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
        ? !Array.isArray(elem)
          ? steamrollArray(arr, [elem, ...flatArr])
          : steamrollArray(arr.concat(elem), flatArr)
        : flatArr;
}