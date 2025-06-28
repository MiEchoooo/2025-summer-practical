/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  // obj空值或null 返回false
  if (obj === null || obj === undefined) return false;
  // classFunction不是函数或为null 返回false
  if (typeof classFunction !== 'function' || classFunction === null) return false;

  let cur = obj;
  while (cur !== null) {
    cur = cur.__proto__;
    /* 
        使用Object.getPrototypeOf()标准API
        安全性更高
        __proto__ 是非标准属性（早期浏览器支持）
    */
    if (cur === classFunction.prototype) return true;
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
