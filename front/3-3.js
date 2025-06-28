/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
    let len = functions.length;
    if  (len === 0) return x;
    
    //从右向左遍历
    let result = x;
    for (let i = functions.length - 1; i >= 0; i --) {
      result = functions[i](result);
    }
    return result;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */