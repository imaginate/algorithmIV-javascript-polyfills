/** @preserve blank line */

/**
 * -----------------------------------------------------------------------------
 * Algorithm IV JavaScript Polyfills (v0.0.1)
 * -----------------------------------------------------------------------------
 * @file Algorithm IV's JavaScript polyfills help ensure that our projects are
 *   cross-browser compatible. At the moment they only include selected
 *   polyfills that are used in our code base. The only native functionality
 *   that is completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/algorithmIV-javascript-polyfills/blob/master/src/pre-compiled-parts/polyfills/console.js}.
 * @module aIVPolyfills
 * @version 0.0.1
 * @author Adam Smith ({@link adamsmith@youlum.com})
 * @copyright 2015 Adam A Smith ([github.com/imaginate]{@link https://github.com/imaginate})
 * @license The Apache License ([algorithmiv.com/docs/license]{@link http://algorithmiv.com/docs/license})
 * @desc More details about aIV's polyfills:
 * <ol>
 *   <li>annotations: 
 *       [See Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 *       and [See JSDoc3]{@link http://usejsdoc.org/}
 *   </li>
 *   <li>contributing: 
 *       [See our guideline]{@link https://github.com/imaginate/algorithmIV-javascript-polyfills/blob/master/CONTRIBUTING.md}
 *   </li>
 * </ol>
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
// The JavaScript Polyfills
////////////////////////////////////////////////////////////////////////////////

;(function(window, document, undefined) {
  "use strict";

/* -----------------------------------------------------------------------------
 * The Console Polyfills (polyfills/console.js)
 * -------------------------------------------------------------------------- */
// insert-polyfills-console

/* -----------------------------------------------------------------------------
 * The Object Polyfills (polyfills/object.js)
 * -------------------------------------------------------------------------- */
// insert-polyfills-object

/* -----------------------------------------------------------------------------
 * The Array Polyfills (polyfills/array.js)
 * -------------------------------------------------------------------------- */
// insert-polyfills-array

})(window, document);