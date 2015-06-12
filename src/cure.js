/** @preserve blank-line */

/**
 * -----------------------------------------------------------------------------
 * Cure.js (v0.0.5)
 * -----------------------------------------------------------------------------
 * @file Cure.js is a collection of JavaScript and DOM polyfills that help
 *   ensure that your web development is cross-browser compatible. At the moment
 *   they only include a small selection of polyfills needed to support
 *   [imaginate]{@link https://github.com/imaginate}'s other projects. The only
 *   native object's functionality that has been completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/cure/blob/master/dev/console.js}
 *   object.
 * @module Cure
 * @version 0.0.5
 * @author Adam Smith adamsmith@algorithmiv.com
 * @copyright 2015 Adam A Smith [github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [algorithmiv.com/cure/license]{@link http://algorithmiv.com/cure/license}
 * @see [Contributing Guide]{@link https://github.com/imaginate/cure/blob/master/CONTRIBUTING.md}
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

/**
 * -----------------------------------------------------------------------------
 * Pre-Defined JSDoc Types
 * -----------------------------------------------------------------------------
 * @typedef {*} val
 * @typedef {Array<*>} vals
 * @typedef {Array<string>} strings
 * @typedef {Array<number>} numbers
 * @typedef {Array<Object>} objects
 * @typedef {Array<boolean>} booleans
 */

////////////////////////////////////////////////////////////////////////////////
// Export Cure
////////////////////////////////////////////////////////////////////////////////

;(function(/** Object */ root, /** function(Object, boolean) */ runCure) {

/* -----------------------------------------------------------------------------
 * Export Vitals (dev/export.js)
 * -------------------------------------------------------------------------- */

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

})(this, function(/** boolean */ hasWindow, undefined) {

  "use strict";

  /** @type {Object} */
  var root = this;

////////////////////////////////////////////////////////////////////////////////
// The Cure Module
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * Cure JSON (dev/parts/json.js)
 * --------------------------------------------------------------------------
 * Note: Uses 3rd Party Script - JSON3 v3.3.2 (bestiejs.github.io/json3)
 * -------------------------------------------------------------------------- */

/* JSON3 v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function(){function M(r,q){function p(a,l){try{a()}catch(c){l&&l()}}function k(a){if(null!=k[a])return k[a];var l;if("bug-string-char-index"==a)l="a"!="a"[0];else if("json"==a)l=k("json-stringify")&&k("date-serialization")&&k("json-parse");else if("date-serialization"==a){if(l=k("json-stringify")&&v){var c=q.stringify;p(function(){l='"-271821-04-20T00:00:00.000Z"'==c(new z(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new z(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new z(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==
c(new z(-1))})}}else{var b;if("json-stringify"==a){var c=q.stringify,e="function"==typeof c;e&&((b=function(){return 1}).toJSON=b,p(function(){e="0"===c(0)&&"0"===c(new B)&&'""'==c(new A)&&c(t)===u&&c(u)===u&&c()===u&&"1"===c(b)&&"[1]"==c([b])&&"[null]"==c([u])&&"null"==c(null)&&"[null,null,null]"==c([u,t,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==c({a:[b,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,b)&&"[\n 1,\n 2\n]"==c([1,2],null,1)},function(){e=!1}));l=e}if("json-parse"==a){var n=
q.parse,d;"function"==typeof n&&p(function(){0===n("0")&&!n(!1)&&(b=n('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'),d=5==b.a.length&&1===b.a[0])&&(p(function(){d=!n('"\t"')}),d&&p(function(){d=1!==n("01")}),d&&p(function(){d=1!==n("1.")}))},function(){d=!1});l=d}}return k[a]=!!l}r||(r=f.Object());q||(q=f.Object());var B=r.Number||f.Number,A=r.String||f.String,E=r.Object||f.Object,z=r.Date||f.Date,I=r.SyntaxError||f.SyntaxError,J=r.TypeError||f.TypeError,K=r.Math||f.Math,F=r.JSON||f.JSON;"object"==
typeof F&&F&&(q.stringify=F.stringify,q.parse=F.parse);var E=E.prototype,t=E.toString,G=E.hasOwnProperty,u,v=new z(-0xc782b5b800cec);p(function(){v=-109252==v.getUTCFullYear()&&0===v.getUTCMonth()&&1===v.getUTCDate()&&10==v.getUTCHours()&&37==v.getUTCMinutes()&&6==v.getUTCSeconds()&&708==v.getUTCMilliseconds()});k["bug-string-char-index"]=k["date-serialization"]=k.json=k["json-stringify"]=k["json-parse"]=null;if(!k("json")){var N=k("bug-string-char-index"),C=function(a,b){var c=0,g,e,n;(g=function(){this.valueOf=
0}).prototype.valueOf=0;e=new g;for(n in e)G.call(e,n)&&c++;g=e=null;c?C=function(a,c){var b="[object Function]"==t.call(a),l,e;for(l in a)b&&"prototype"==l||!G.call(a,l)||(e="constructor"===l)||c(l);(e||G.call(a,l="constructor"))&&c(l)}:(e="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),C=function(a,c){var b="[object Function]"==t.call(a),l,g=!b&&"function"!=typeof a.constructor&&D[typeof a.hasOwnProperty]&&a.hasOwnProperty||G;for(l in a)b&&
"prototype"==l||!g.call(a,l)||c(l);for(b=e.length;l=e[--b];g.call(a,l)&&c(l));});return C(a,b)};if(!k("json-stringify")||!k(" date-serialization")){var L={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x=function(a,b){return("000000"+(b||0)).slice(-a)},V=function(a){a=a.charCodeAt(0);var b=L[a];return b?b:"\\u00"+x(2,a.toString(16))},O=/[\x00-\x1f\x22\x5c]/g,S=function(a){O.lastIndex=0;return'"'+(O.test(a)?a.replace(O,V):a)+'"'},P=function(a){var b,c,g,e,n,d,h,f,m;if(v)b=function(a){c=
a.getUTCFullYear();g=a.getUTCMonth();e=a.getUTCDate();d=a.getUTCHours();h=a.getUTCMinutes();f=a.getUTCSeconds();m=a.getUTCMilliseconds()};else{var w=K.floor,k=[0,31,59,90,120,151,181,212,243,273,304,334],p=function(a,c){return k[c]+365*(a-1970)+w((a-1969+(c=+(1<c)))/4)-w((a-1901+c)/100)+w((a-1601+c)/400)};b=function(a){e=w(a/864E5);for(c=w(e/365.2425)+1970-1;p(c+1,0)<=e;c++);for(g=w((e-p(c,0))/30.42);p(c,g+1)<=e;g++);e=1+e-p(c,g);n=(a%864E5+864E5)%864E5;d=w(n/36E5)%24;h=w(n/6E4)%60;f=w(n/1E3)%60;
m=n%1E3}}P=function(a){a>-1/0&&a<1/0?(b(a),a=(0>=c||1E4<=c?(0>c?"-":"+")+x(6,0>c?-c:c):x(4,c))+"-"+x(2,g+1)+"-"+x(2,e)+"T"+x(2,d)+":"+x(2,h)+":"+x(2,f)+"."+x(3,m)+"Z",c=g=e=d=h=f=m=null):a=null;return a};return P(a)},Q=function(a,b,c,g,e,n,d){var h,f,m,k,q,r;p(function(){h=b[a]});"object"==typeof h&&h&&(h.getUTCFullYear&&"[object Date]"==t.call(h)&&h.toJSON===z.prototype.toJSON?h=P(h):"function"==typeof h.toJSON&&(h=h.toJSON(a)));c&&(h=c.call(b,a,h));if(h==u)return h===u?h:"null";f=typeof h;"object"==
f&&(m=t.call(h));switch(m||f){case "boolean":case "[object Boolean]":return""+h;case "number":case "[object Number]":return h>-1/0&&h<1/0?""+h:"null";case "string":case "[object String]":return S(""+h)}if("object"==typeof h){for(f=d.length;f--;)if(d[f]===h)throw J();d.push(h);k=[];r=n;n+=e;if("[object Array]"==m){q=0;for(f=h.length;q<f;q++)m=Q(q,h,c,g,e,n,d),k.push(m===u?"null":m);f=k.length?e?"[\n"+n+k.join(",\n"+n)+"\n"+r+"]":"["+k.join(",")+"]":"[]"}else C(g||h,function(a){var b=Q(a,h,c,g,e,n,
d);b!==u&&k.push(S(a)+":"+(e?" ":"")+b)}),f=k.length?e?"{\n"+n+k.join(",\n"+n)+"\n"+r+"}":"{"+k.join(",")+"}":"{}";d.pop();return f}};q.stringify=function(a,b,c){var g,e,f,d;if(D[typeof b]&&b)if(d=t.call(b),"[object Function]"==d)e=b;else if("[object Array]"==d){f={};for(var h=0,m=b.length,k;h<m;k=b[h++],(d=t.call(k),"[object String]"==d||"[object Number]"==d)&&(f[k]=1));}if(c)if(d=t.call(c),"[object Number]"==d){if(0<(c-=c%1))for(g="",10<c&&(c=10);g.length<c;g+=" ");}else"[object String]"==d&&(g=
10>=c.length?c:c.slice(0,10));return Q("",(k={},k[""]=a,k),e,f,g,"",[])}}if(!k("json-parse")){var W=A.fromCharCode,X={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,H,m=function(){b=H=null;throw I();},y=function(){for(var a=H,l=a.length,c,g,e,f,d;b<l;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return c=N?a.charAt(b):a[b],b++,c;case 34:c="@";for(b++;b<l;)if(d=a.charCodeAt(b),32>d)m();else if(92==d)switch(d=
a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:c+=X[d];b++;break;case 117:g=++b;for(e=b+4;b<e;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||m();c+=W("0x"+a.slice(g,b));break;default:m()}else{if(34==d)break;d=a.charCodeAt(b);for(g=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);c+=a.slice(g,b)}if(34==a.charCodeAt(b))return b++,c;m();default:g=b;45==d&&(f=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&m();b<
l&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(e=++b;e<l&&(d=a.charCodeAt(e),48<=d&&57>=d);e++);e==b&&m();b=e}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(e=b;e<l&&(d=a.charCodeAt(e),48<=d&&57>=d);e++);e==b&&m();b=e}return+a.slice(g,b)}f&&m();c=a.slice(b,b+4);if("true"==c)return b+=4,!0;if("fals"==c&&101==a.charCodeAt(b+4))return b+=5,!1;if("null"==c)return b+=4,null;m()}return"$"},R=function(a){var b,c;"$"==a&&m();if("string"==typeof a){if("@"==
(N?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];;){a=y();if("]"==a)break;c?","==a?(a=y(),"]"==a&&m()):m():c=!0;","==a&&m();b.push(R(a))}return b}if("{"==a){for(b={};;){a=y();if("}"==a)break;c?","==a?(a=y(),"}"==a&&m()):m():c=!0;","!=a&&"string"==typeof a&&"@"==(N?a.charAt(0):a[0])&&":"==y()||m();b[a.slice(1)]=R(y())}return b}m()}return a},U=function(a,b,c){c=T(a,b,c);c===u?delete a[b]:a[b]=c},T=function(a,b,c){var g=a[b],e;if("object"==typeof g&&g)if("[object Array]"==t.call(g))for(e=g.length;e--;U(g,
e,c));else C(g,function(a){U(g,a,c)});return c.call(a,b,g)};q.parse=function(a,f){var c,g;b=0;H=""+a;c=R(y());"$"!=y()&&m();b=H=null;return f&&"[object Function]"==t.call(f)?T((g={},g[""]=c,g),"",f):c}}}q.runInContext=M;return q}var I=typeof define==="function"&&define.amd,D={"function":!0,object:!0},A=D[typeof exports]&&exports&&!exports.nodeType&&exports,f=D[typeof window]&&window||this,p=A&&D[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!p||p.global!==p&&p.window!==
p&&p.self!==p||(f=p);var J=f.JSON,K=f.JSON3,L=!1,B=M(f,f.JSON3={noConflict:function(){L||(L=!0,f.JSON=J,f.JSON3=K,J=K=null);return B}});f.JSON={parse:B.parse,stringify:B.stringify};I&&define(function(){return B})}).call(this);

/* -----------------------------------------------------------------------------
 * Cure AJAX (dev/parts/ajax.js)
 * -------------------------------------------------------------------------- */

  if (hasWindow && !window.XMLHttpRequest) {
    /**
     * ---------------------------------------------
     * Public Constructor (XMLHttpRequest)
     * ---------------------------------------------
     * @desc A polyfill for the native constructor. For details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest}
     * @constructor
     */
    window.XMLHttpRequest = function() {

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

/* -----------------------------------------------------------------------------
 * Cure Array (dev/parts/array.js)
 * -------------------------------------------------------------------------- */

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

  if (!Array.prototype.indexOf ||
      !(function(/** !Array<number> */ arr) {
        return (arr.indexOf(8, 2) === -1) && (arr.indexOf(9, -1) === -1);
      })([ 8, 9 ]) ) {
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

/* -----------------------------------------------------------------------------
 * Cure Console (dev/parts/console.js)
 * -------------------------------------------------------------------------- */

  /**
   * -----------------------------------------------------
   * Global Object (console)
   * -----------------------------------------------------
   * @desc A polyfill for the native object. For method details
   *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console}
   * @type {Object<string, function}
   */
  if (hasWindow) {
    window.console = window.console || {};
  }
  else {
    root.console = root.console || {};
  }

  (function(console, emptyFunc) {

    // Note: The console method polyfills are completed alphabetically with the
    // exception of console.log and console.error

    if (!console.log) {
      /**
       * ---------------------------------------------
       * Public Method (console.log)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/log}
       * @param {...*} val
       */
      console.log = emptyFunc;
    }

    if (!console.error) {
      /**
       * ---------------------------------------------
       * Public Method (console.error)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.error = console.log;
    }

    if (!console.assert) {
      /**
       * ---------------------------------------------
       * Public Method (console.assert)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/console/assert}
       * @param {boolean} assertion
       * @param {...*} val
       */
      console.assert = function(assertion) {

        /** @type {!Array<*>} */
        var args;

        if (assertion) {
          return;
        }

        args = ( (arguments.length > 1) ?
          Array.prototype.slice.call(arguments, 1)
          : [ 'A console.assert call failed.' ]
        );

        return console.error.apply(this, args);
      };
    }

    if (!console.clear) {
      /**
       * ---------------------------------------------
       * Public Method (console.clear)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleclear}
       * @type {function}
       */
      console.clear = emptyFunc;
    }

    if (!console.count) {
      /**
       * ---------------------------------------------
       * Public Method (console.count)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/count}
       * @param {string=} label
       */
      console.count = emptyFunc;
    }

    if (!console.debug) {
      /**
       * ---------------------------------------------
       * Public Method (console.debug)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledebugobject-object}
       * @param {...*} val
       */
      console.debug = console.log;
    }

    if (!console.dir) {
      /**
       * ---------------------------------------------
       * Public Method (console.dir)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledirobject}
       * @param {!(Object|function)} obj
       */
      console.dir = console.log;
    }

    if (!console.dirxml) {
      /**
       * ---------------------------------------------
       * Public Method (console.dirxml)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledirxmlobject}
       * @param {!(Object|function)} obj
       */
      console.dirxml = console.log;
    }

    if (!console.exception) {
      /**
       * ---------------------------------------------
       * Public Method (console.exception)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.exception = console.error;
    }

    if (!console.group) {
      /**
       * ---------------------------------------------
       * Public Method (console.group)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consolegroupobject-object}
       * @param {...*} val
       */
      console.group = emptyFunc;
    }

    if (!console.groupCollapsed) {
      /**
       * ---------------------------------------------
       * Public Method (console.groupCollapsed)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consolegroupcollapsedobject-object}
       * @param {...*} val
       */
      console.groupCollapsed = console.group;
    }

    if (!console.groupEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.groupEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd}
       * @type {function}
       */
      console.groupEnd = emptyFunc;
    }

    if (!console.info) {
      /**
       * ---------------------------------------------
       * Public Method (console.info)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/info}
       * @param {...*} val
       */
      console.info = console.log;
    }

    if (!console.markTimeline) {
      /**
       * ---------------------------------------------
       * Public Method (console.markTimeline)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Apple]{@link https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW8}
       * @param {string} label
       */
      console.markTimeline = ( (!console.timeStamp) ?
        emptyFunc : console.timeStamp
      );
    }

    if (!console.profile) {
      /**
       * ---------------------------------------------
       * Public Method (console.profile)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleprofilelabel}
       * @param {string=} label
       */
      console.profile = emptyFunc;
    }

    if (!console.profileEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.profileEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleprofileend}
       * @type {function}
       */
      console.profileEnd = emptyFunc;
    }

    if (!console.table) {
      /**
       * ---------------------------------------------
       * Public Method (console.table)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/table}
       * @param {!(Object|Array)} data
       * @param {!Array=} columns
       */
      console.table = emptyFunc;
    }

    if (!console.time) {
      /**
       * ---------------------------------------------
       * Public Method (console.time)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/time}
       * @param {string} label
       */
      console.time = emptyFunc;
    }

    if (!console.timeEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd}
       * @param {string} label
       */
      console.timeEnd = emptyFunc;
    }

    if (!console.timeline) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeline)
       * ---------------------------------------------
       * @desc A polyfill for the deprecated Chrome method.
       * @param {string} label
       */
      console.timeline = emptyFunc;
    }

    if (!console.timelineEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.timelineEnd)
       * ---------------------------------------------
       * @desc A polyfill for the deprecated Chrome method.
       * @param {string} label
       */
      console.timelineEnd = emptyFunc;
    }

    if (!console.timeStamp) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeStamp)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoletimestamplabel}
       * @param {string=} label
       */
      console.timeStamp = console.markTimeline;
    }

    if (!console.trace) {
      /**
       * ---------------------------------------------
       * Public Method (console.trace)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoletraceobject}
       * @param {...*} val
       */
      console.trace = console.log;
    }

    if (!console.warn) {
      /**
       * ---------------------------------------------
       * Public Method (console.warn)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.warn = console.error;
    }

    // Convert console objects to functions if needed (IE8 & IE9)
    (function(funcSetupNeeded, bind, call, slice) {

      /** @type {number} */
      var i;
      /** @type {string} */
      var method;
      /** @type {!Array<string>} */
      var methodsIE8;
      /** @type {!Array<string>} */
      var methodsIE9;

      if (funcSetupNeeded) {

        methodsIE8 = [ 'assert', 'error', 'info', 'log', 'warn' ];
        methodsIE9 = [ 'clear', 'dir', 'profile', 'profileEnd' ];
        methodsIE9 = methodsIE8.concat(methodsIE9);

        if (bind) {
          i = methodsIE9.length;
          while (i--) {
            method = console[ methodsIE9[i] ];
            console[ methodsIE9[i] ] = bind.call(method, console);
          }
        }
        else {
          i = methodsIE8.length;
          while (i--) {
            method = console[ methodsIE8[i] ];
            call.call(method, console, slice.call(arguments));
          }
        }
      }
    })((typeof console.log === 'object'), Function.prototype.bind,
        Function.prototype.call, Array.prototype.slice);

  })( (hasWindow) ? window.console : root.console, function(){});

/* -----------------------------------------------------------------------------
 * Cure Object (dev/parts/object.js)
 * -------------------------------------------------------------------------- */

  if (!Object.keys) {
    /**
     * ---------------------------------------------
     * Public Method (Object.keys)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
     * @param {!(Object|function)} obj
     * @return {strings}
     */
    Object.keys = (function fixMissingObjectKeys() {

      /** @type {Object} */
      var testObj;
      /** @type {boolean} */
      var enumBug;
      /** @type {strings} */
      var notEnum;

      testObj = { toString: null };
      enumBug = !( testObj.propertyIsEnumerable('toString') );
      notEnum = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ];

      return function keys(obj) {

        /** @type {string} */
        var errorMessage;
        /** @type {string} */
        var prop;
        /** @type {number} */
        var i;
        /** @type {vals} */
        var result;

        if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
          errorMessage = 'An Object.keys call received an invalid object parameter. ';
          errorMessage += 'Note: It only accepts non-null objects and functions.';
          throw new TypeError(errorMessage);
        }

        result = [];

        for (prop in obj) {
          if ( obj.hasOwnProperty(prop) ) {
            result.push(prop);
          }
        }

        if (enumBug) {
          i = notEnum.length;
          while (i--) {
            if ( obj.hasOwnProperty(notEnum[i]) ) {
              result.push(notEnum[i]);
            }
          }
        }

        return result;
      };
    })();
  }

  if (!Object.freeze) {
    /**
     * ---------------------------------------------
     * Public Method (Object.freeze)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze}
     * @param {!Object} obj
     * @return {!Object}
     */
    Object.freeze = function(obj) {

      /** @type {string} */
      var errorMessage;

      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        errorMessage = 'An Object.freeze call received an invalid object parameter. ';
        errorMessage += 'Note: It only accepts non-null objects and functions.';
        throw new TypeError(errorMessage);
      }

      return obj;
    };
  }

  // Fix Object.freeze function param bug
  try {
    Object.freeze(function testObjectFreezeForBug() {});
  }
  catch (e) {
    Object.freeze = (function fixObjectFreezeBug(orgObjectFreeze) {

      return function freeze(obj) {
        if (typeof obj === 'function') {
          return obj;
        }
        else {
          return orgObjectFreeze(obj);
        }
      };
    })(Object.freeze);
  }

  if (!Object.isFrozen) {
    /**
     * ---------------------------------------------
     * Public Method (Object.isFrozen)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen}
     * @param {!Object} obj
     * @return {boolean}
     */
    Object.isFrozen = function(obj) {

      /** @type {string} */
      var errorMessage;

      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        errorMessage = 'An Object.isFrozen call received an invalid object parameter. ';
        errorMessage += 'Note: It only accepts non-null objects and functions.';
        throw new TypeError(errorMessage);
      }

      return true;
    };
  }

});