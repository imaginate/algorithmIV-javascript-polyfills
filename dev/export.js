
  /** @type {(Object|?function)} */
  var exports = isObj(typeof exports) && getObj(exports, true);
  /** @type {(Object|?function)} */
  var module = isObj(typeof module) && getObj(module, true);
  /** @type {(Object|?function)} */
  var window = isObj(typeof window) && getObj(window);

  root = (function(root, global, window, self) {
    return global || window || self || root;
  })(
    root,
    exports && module && isObj(typeof global, true) && getObj(global),
    ( window && root && (window === root.window) ) ? null : window,
    isObj(typeof self) && getObj(self)
  );

  runCure.call(root, !!window);

  /**
   * ---------------------------------------------------
   * Private Function (isObj)
   * ---------------------------------------------------
   * @desc A helper method that checks if a value is an object.
   * @private
   * @param {string} typeOf
   * @param {boolean=} noFunc
   * @return {?boolean}
   */
  function isObj(typeOf, noFunc) {
    return (typeOf === 'object') || (!noFunc && typeOf === 'function') || null;
  }

  /**
   * ---------------------------------------------------
   * Private Function (getObj)
   * ---------------------------------------------------
   * @desc A helper method that checks if an object is a valid object and
   *   returns the object or null.
   * @private
   * @param {(Object|?function)} obj
   * @param {boolean=} checkNode
   * @return {boolean}
   */
  function getObj(obj, checkNode) {
    if (obj && ( (checkNode && obj.nodeType) ||
                 (!checkNode && !obj.Object) )) {
      obj = null;
    }
    return obj;
  }
