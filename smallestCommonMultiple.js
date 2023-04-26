/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 adn 3. The answer here would be 6.
 */

/**
 * Problem Explanation
 * 
 * The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended to more than two numbers as well.
 * 
 * We can first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.
 * 
 * An example would be the numbers 3 and 4. the multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, ... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.
 * 
 * An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.
 * 
 * Be careful - do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.
 */

//Hint: You can use remainder operator(%) to check if the reminder of a division is 0, which means it is evenly divisible.

//Solution 1 (Looping approach)
function smallestCommons(arr) {
    //Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    //Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}
/**
 * In this solution, we check every multiple of the largest value in the range until we find a value that is divisible by every value in the range.
 * 
 * The upper bound for this loop is the product of all values in the provided range, because this number will be dicisible by every value in the range.
 */

//Solution 2 (ES6 looping)
function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr)
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
        if (divisible) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);
//This solution uses ES6 syntax to condense the logic in Solution 1.

//Solution 3 (GCD and LCM)
function smallestCommons(arr) {
    //Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    //GCD of two numbers
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    //LCM of two numbers
    const lcm = (a, b) => a * b / gcd(a, b);
    //LCM of multiple numbers
    return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);
//This solution uses formulae and algorithms for the Greatest Common Divisor and Least Common Multiple off of Wikipedia to compactly and quickly compute the Smallest Common Multiple.

//Solution 4 (Prime factorization)
function smallestCommons(arr) {
    const primeFactors = {};
    const [min, max] = arr.sort((a, b) => a - b);
    for (let i = min; i <= max; i++) {
        //Factorize number in range
        const currentFactors = getPrimeFactors(i);
        for (let prime in currentFactors) {
            // Add factor to set or update number of occurrences
            if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
                primeFactors[prime] = currentFactors[prime]
            }
        }
    }
    // Build SCM from factorization
    let multiple = 1;
    for (let prime in primeFactors) {
        multiple *= prime ** primeFactors[prime];
    }
    return multiple;
}

//Compute prime factors of a number 
function getPrimeFactors(num) {
    const factors = {};
    for (let i = 2; i <= num; i++) {
        // Count occurances of factor
        // Note that composite values will not divide num
        while ((num % i) === 0) {
            factors[i] = (factors[i]) ? factors[i] + 1 : 1;
            num /= i;
        }
    }
    return factors;
}

smallestCommons([1, 5]);
// This solution uses a prime factorization of the numbers in the range to compute the smallest common multiple. In general, Solution 3 is much faster, but with a very large range or very large values, sometimes Solution 3 may trigger a recursion limit in some browsers.