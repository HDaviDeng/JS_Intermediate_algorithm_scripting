//Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

//Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return "";
    };
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();

  /**
   * Problem Explanation
   * 
   * When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.
   * 
   * There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.
   * 
   * As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutabel.
   * 
   * Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that.
   * Once you understand what you need to do, this problem is very easy and straightforward.
   */

  //Closures
  //Details of the Object Model

  /**
   * Hint 1: Use the this notation to create the keys instead of regular functions: This means instead of var carName = function() you should use this.varName = function() 
   * 
   * Hint 2: The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: this.fullName = firstAndLast;
   * 
   * Hint 3: Often the code would not work the way you expect it due to wrong variable names, make sure to check that yo spell them the right way. This happend to all of us at some point.
   * 
   * Hint 4: If you are having problems with writing the setter methods, below is a template for a set method:
   * 
   * this.setFullName = function(input) {
   * //insert your code here
   * };
   */

  //Solution
  const Person = function(firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
  };

  /**
   * Create a variable that will make a copy of the full name that was passed as a parameter.
   * 
   * Then we can proceed to create the six methods needed and return what is asked for.
   * 
   * For the individual setters, we can use the split to turn the fullname into an array of first and last names and concatenate the unchanged portion of the name with what was passed as a parameter.
   */