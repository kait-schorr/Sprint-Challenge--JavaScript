/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const output = [];
  for (let i = 0; i < elements.length; i++) {
    output.push(cb(elements[i]));
  }
  return output;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let limit = 0;
  return (...args) => {
    if (limit >= n) {
      return null;
    }
    limit++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const obj = {};

  return (arg) => {
    if (!(arg in obj)) {
      obj[arg] = cb(arg);
    }
    return obj[arg];
  };
};


/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let values = [];
  let output = true;
  const recur = (object) => {
    let value = Object.values(object);
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] === 'object') {
        recur(value[i]);
      }
      else {
        values.push(value[i]);
      }
    }
    return values;
  }
  let result = recur(obj);
  for (let i = 1; i < result.length; i++) {
    if (result[i] !== result[0]) {
      return false;
    }
  }
  return true;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let output = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      output = output.concat(flatten(elements[i]));
    } else {
      output.push(elements[i]);
    }
  }
  return output;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
