  if (!Array.isArray) {
    /**
     * ---------------------------------------------
     * Public Method (Array.isArray)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray}
     * @param {*} val
     * @return {boolean}
     */
    Array.isArray = function(val) {
      return Object.prototype.toString.call(val) === '[object Array]';
    };
  }

  /** @type {boolean} */
  var checkArrayProtoIndexOf = (function checkArrayProtoIndexOf(doesIndexOf) {

    /** @type {boolean} */
    var result;
    /** @type {!Array<number>} */
    var arr;

    result = doesIndexOf;
    if (result) {
     arr = [ 8, 9 ];
     result = (arr.indexOf(8, 2)  === -1) && (arr.indexOf(9, -1) === -1);
    }

    return result;

  })(!!Array.prototype.indexOf);

  if (!checkArrayProtoIndexOf) {
    /**
     * ---------------------------------------------
     * Public Method (Array.prototype.indexOf)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
     * @param {*} findVal
     * @param {number=} fromIndex
     * @return {number}
     */
    Array.prototype.indexOf = function(findVal, fromIndex) {

      /** @type {string} */
      var errorMsg;
      /** @type {number} */
      var result;
      /** @type {number} */
      var len;
      /** @type {number} */
      var i;

      if ( !Array.isArray(this) ) {
        errorMsg = 'An Array.prototype.indexOf call was made on a non-array.';
        throw new TypeError(errorMsg);
      }

      if (typeof fromIndex !== 'number') {
        fromIndex = 0;
      }
      len = this.length;
      result = -1;

      // Loop through the array until a match or the end is found
      if (len !== 0 && Math.abs(fromIndex) < len) {
        if (fromIndex < 0) {
          len = len - fromIndex;
        }
        i = (fromIndex < 0) ? -1 : --fromIndex;
        while (++i < len) {
          if (this[i] === findVal) {
            result = i;
            break;
          }
        }
      }

      return result;
    };
  }
