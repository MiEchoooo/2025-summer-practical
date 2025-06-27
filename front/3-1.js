/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== 'function') return false;

  try {
    // 对象和函数使用 instanceof
    if (typeof obj === 'object' || typeof obj === 'function') {
      return obj instanceof classFunction;
    }
    // 原始值，转为对象后使用 instanceof 判断（支持 5n, 5, true, 'abc' 等）
    return Object(obj) instanceof classFunction;
  } 
  catch (e) {
    // 兼容一些非法操作，如 Symbol 无法包装成对象
    return false;
  }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */