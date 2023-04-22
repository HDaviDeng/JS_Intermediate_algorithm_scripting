/**
 * Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix,
 * 
 * The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d arry.
 * 
 * For example, for the input GCG, return [["G", "C"],["C", "G"], ["G", "C"]]
 * 
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

/**
 * Problem Explanation
 * 
 * You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.
 * 
 * Another way to interpret the problem: there are four potential characters that exist in DNA: "A", "T", "G", and "C". "A" and "T" are always paired together, and "G" and "C" are always paired together.
 * 
 * This problem presents you with an input, e.g. "ATCGA". Each of those five characters are missing their pairs.
 * E.g. the first character "A" needs to be paired with "T" to givve the array element ["A", "T"].
 * The second character "T" needs to be paired with "A" to give the array element ["T", "A"].
 * The number of elements in the final output equals the number of characters in the input.
 * 
 * This problem does not involve rearranging the input into different combinations or permutations.
 */

/**
 * Hint 1: There are two pairs of values, A-T and C-G.
 * Hint 2: A switch would be a natural option here, because each character in the string has 4 possible values.
 * Hint 3: The result must be an array of arrays.
 */

//Solution 1
function pairElement(str) {
    //Function to match each character with the base pair
    const matchWithBasePair = function(char) {
        switch (char) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
        }
    };

    //Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        pairs.push(matchWithBasePair(str[i]));
    }
    return pairs;
}
/**
 * Inside of the matchWithBasePair function, a switch is used to cover all four possible characters. Using if statements is another option.
 * 
 * Create an empty array and use the matchWithBasePair function to push the right values to the array and return them.
 */

//Solution 2
function pairElement(str) {
    // create object for pair lookup
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    // map character to array of character and matching pair
    return str
        .split("")
        .map(x => [x, pairs[x]]);
} 
/**
 * First define an object with all pair possibilities, this allows us to easily find by key or value.
 * 
 * Split str into a characters array so we can use each letter to find its pair.
 * 
 * Use the map function to map each character in the array of individual characters to an array with the character and its matching pair, creating a 2D array.
 */