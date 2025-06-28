var checkIfInstanceOf = function(obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== 'function') return false;

  try {
    if (typeof obj === 'object' || typeof obj === 'function') {
      return obj instanceof classFunction;
    }
    return Object(obj) instanceof classFunction;
  } catch (e) {
    return false;
  }
};
