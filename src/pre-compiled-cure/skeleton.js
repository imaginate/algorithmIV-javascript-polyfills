/** @preserve blank line */

/**
 * -----------------------------------------------------------------------------
 * Cure.js (v0.0.2)
 * -----------------------------------------------------------------------------
 * @file Cure.js is a collection of JavaScript and DOM polyfills that help
 *   ensure that your web development is cross-browser compatible. At the moment
 *   they only include a small selection of polyfills needed to support
 *   [imaginate]{@link https://github.com/imaginate}'s other projects. The only
 *   native object's functionality that has been completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/cure/blob/master/src/pre-compiled-cure/polyfills/console.js}
 *   object.
 * @module Cure
 * @version 0.0.2
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
// The Dependencies
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * BestieJS JSON3 (dependencies/json3.min.js)
 * -------------------------------------------------------------------------- */
// insert-json3

////////////////////////////////////////////////////////////////////////////////
// The Cure Polyfills
////////////////////////////////////////////////////////////////////////////////

;(function(window, document, undefined) {
  "use strict";

/* -----------------------------------------------------------------------------
 * The Console Polyfills (polyfills/console.js)
 * -------------------------------------------------------------------------- */
// insert-console

/* -----------------------------------------------------------------------------
 * The Object Polyfills (polyfills/object.js)
 * -------------------------------------------------------------------------- */
// insert-object

/* -----------------------------------------------------------------------------
 * The Array Polyfills (polyfills/array.js)
 * -------------------------------------------------------------------------- */
// insert-array

/* -----------------------------------------------------------------------------
 * The XMLHttpRequest Polyfills (polyfills/xml-http-request.js)
 * -------------------------------------------------------------------------- */
// insert-xml-http-request

})(window, document);