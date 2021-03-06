// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
*/
  // Potential Solution:
    
  // Higher order function using "cb" as the call back
//  function firstItem(arr, cb) {
//    return cb(arr[0]);
//  }

  // Function invocation 
//  firstItem(items, function(first) {
//    console.log(first)
//  });

//let cbFunc = function(first) {
//    console.log(first);
//  };
//
//console.log(firstItem(items, cbFunc));


// -----------------------------------------------------

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length);
}

let lengthCb = function(value) {
    console.log(value);
};

console.log(getLength(items, lengthCb));

// -----------------------------------------------------

// -----------------------------------------------------
function last(arr, cb) {
  // last passes the last item of the array into the callback.
    return cb(arr[arr.length-1]);
}

let lastItemCb = function(value) {
    console.log(value);
};

console.log(last(items, lastItemCb));

// -----------------------------------------------------

// -----------------------------------------------------
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

let sumCb = function(num1, num2) {
    console.log(num1, num2);
};

console.log(sumNums(5, 10, sumCb));
// -----------------------------------------------------

// -----------------------------------------------------


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x, y);
}

let multiplyCb = function(num1, num2) {
    return num1 * num2;
};

console.log(multiplyNums(6, 5, multiplyCb));


// -----------------------------------------------------

// -----------------------------------------------------
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
//    if(list.includes(item)){
//        return cb(true);
//    } else {
//        return cb(false);
//    }
    return list.includes(item);
}

let containsCb = function(doesOrDoesNotContain) {
    console.log(doesOrDoesNotContain);
};

console.log(contains('Pencil', items, containsCb));
console.log(contains('Cup', items, containsCb));
console.log(contains('yo-yo', items, containsCb));
console.log(contains('pig', items, containsCb));

// -----------------------------------------------------
///* STRETCH PROBLEM */
//
//function removeDuplicates(array, cb) {
//  // removeDuplicates removes all duplicate values from the given array.
//  // Pass the duplicate free array to the callback function.
//  // Do not mutate the original array.
//}
