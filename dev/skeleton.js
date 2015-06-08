/** @preserve blank-line */

/**
 * -----------------------------------------------------------------------------
 * Cure.js (v0.0.3)
 * -----------------------------------------------------------------------------
 * @file Cure.js is a collection of JavaScript and DOM polyfills that help
 *   ensure that your web development is cross-browser compatible. At the moment
 *   they only include a small selection of polyfills needed to support
 *   [imaginate]{@link https://github.com/imaginate}'s other projects. The only
 *   native object's functionality that has been completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/cure/blob/master/dev/console.js}
 *   object.
 * @module Cure
 * @version 0.0.3
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

;(function(root, cure) {

  // AMD
  if (typeof define === 'function' && define.amd &&
      typeof define.amd === 'object') {
    define([], function() {
      cure(root, 'amd');
    });
  }
  // Node.js
  else if (typeof exports === 'object') {
    module.exports = function() {
      cure(root, 'node');
    };
  }
  // Browser
  else {
    cure(root, 'browser');
  }

})(this,

////////////////////////////////////////////////////////////////////////////////
// The Cure Polyfills
////////////////////////////////////////////////////////////////////////////////

function cure(/** Object */ root, /** string */ env) {

var window = (!!window) ? window : root;

/* -----------------------------------------------------------------------------
 * Cure JSON (json.js)
 * --------------------------------------------------------------------------
 * Note: Uses 3rd Party Script - JSON3 v3.3.2 (bestiejs.github.io/json3)
 * -------------------------------------------------------------------------- */
// insert-json

(function(root, undefined) {
  "use strict";

/* -----------------------------------------------------------------------------
 * Cure AJAX (ajax.js)
 * -------------------------------------------------------------------------- */
// insert-ajax

/* -----------------------------------------------------------------------------
 * Cure Array (array.js)
 * -------------------------------------------------------------------------- */
// insert-array

/* -----------------------------------------------------------------------------
 * Cure Console (console.js)
 * -------------------------------------------------------------------------- */
// insert-console

/* -----------------------------------------------------------------------------
 * Cure Object (object.js)
 * -------------------------------------------------------------------------- */
// insert-object

})(window); // End anon module
});  // End cure module & export