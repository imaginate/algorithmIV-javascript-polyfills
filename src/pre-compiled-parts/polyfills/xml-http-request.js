  if (!XMLHttpRequest) {
    /**
     * ---------------------------------------------
     * Public Constructor (XMLHttpRequest)
     * ---------------------------------------------
     * @desc A polyfill for the native constructor. For details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest}
     * @constructor
     */
    XMLHttpRequest = function() {

      /** @type {!Object} */
      var obj;

      try {
        obj = new ActiveXObject('Msxml2.XMLHTTP.6.0');
      }
      catch (e) {
        try {
          obj = new ActiveXObject('Msxml2.XMLHTTP.3.0');
        }
        catch (e) {
          try {
            obj = new ActiveXObject('Microsoft.XMLHTTP');
          }
          catch (e) {
            throw new Error('Your browser does not support XMLHttpRequest.');
          }
        }
      }

      return obj;
    };
  }
