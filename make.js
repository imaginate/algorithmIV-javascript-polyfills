/**
 * -----------------------------------------------------------------------------
 * Cure.js - CLI Command (make)
 * -----------------------------------------------------------------------------
 * @file Handles the 'make' command-line command for Cure.js. Note: Java Runtime
 *   Environment version 7 is required before running this command.
 * @version 0.0.3
 * @author Adam Smith adamsmith@algorithmiv.com
 * @copyright 2015 Adam A Smith [github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [algorithmiv.com/cure/license]{@link http://www.algorithmiv.com/cure/license}
 * // Cure.js Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

////////////////////////////////////////////////////////////////////////////////
// ShellJS
////////////////////////////////////////////////////////////////////////////////
// Global Shell Helpers
// @description
//   cat(file|file_array[, file...]): file_string|files_concat_string
//   cd(dir): undefined
//   chmod(octal_mode|symbolic_mode, file): undefined OPTS -v -c -R
//   config === { silent: boolean, fatal: boolean } (get and set allowed)
//     @default { silent: false, fatal: false }
//   cp([options, ]source|source_array[, source...], dest): undefined OPTS -f -r
//   dirs([options|'-Nth'|'+Nth']): path_string|dir_path_strings_array OPTS -c
//   echo(string[, string...]): printed_string
//   env === process.env (get and set allowed)
//   error(): null|error_string
//   exec(command[, options][, callback]):
//     sync returns: { code: exit_code_string, output: stdout_stderr_string }
//     async returns: child_process_object
//     OPTS { async: boolean, silent: boolean }
//     OPTS @default { async: false, silent: false }
//   exit(code): undefined
//   find(path|path_array[, path...]): filepath_filename_string_array
//   grep([options, ]search_regex, file|file_array[, file...]):
//     matched_lines_string OPTS -v
//   ln([options, ]source, dest): undefined OPTS -s -f
//   ls([options, ]path|path_array[, path...]): filename_string_array OPTS -R -A
//   mkdir(options, ]dir|dir_array[, dir...]): undefined OPTS -p
//   mv([options, ]source|source_array[, source...]): undefined OPTS -f
//   popd([options, ]['-Nth'|'+Nth']): dir_path_strings_array OPTS -n
//   process(): undefined
//   pushd([options, ][dir|'-Nth'|'+Nth']): dir_path_strings_array OPTS -n
//   pwd(): current_dir_string
//   rm([options, ]file|file_array[, file...]): undefined OPTS -f -r
//   sed([options, ]search_regex, replacement, file): new_file_string OPTS -i
//   tempdir(): current_platform_temp_dir_string
//   test(option, path): boolean OPTS -b -c -d -e -f -L -p -S
//     test is true if path [-b is block device] [-c is character device]
//                          [-d is directory] [-e exists] [-f is regular file]
//                          [-L is symbolic link] [-p is pipe] [-S is socket]
//   to - String.prototype.to(file): undefined
//   toEnd - String.prototype.toEnd(file): undefined
//   which(command): command_path_string

/** @type {boolean} */
var hasError = false;

try {
  require('shelljs/global');
}
catch (error) {
  console.error('Error: ShellJS is not installed. "' + error.toString() + '"');
  hasError = true;
}

////////////////////////////////////////////////////////////////////////////////
// MAKE CUSTOM BUILD
////////////////////////////////////////////////////////////////////////////////
// The CLI Make Command
// @example
//   // BASE SYNTAX EXPLAINED
//   $ node make [output-filename=] [minify-output=] [category...]
//   
//   // CATEGORY OPTIONS
//   // ajax all array console json object
//   
//   // MAKES FILES scr/cure-obj-arr-json.js AND src/cure-obj-arr-json.min.js
//   $ node make cure-obj-arr-json object array json
//   
//   // MAKES FILES scr/cure.js AND src/cure.min.js
//   $ node make
//   
//   // MAKES FILE scr/cure-ajax.js
//   $ node make cure-ajax false ajax
//   
//   // MAKES FILE scr/cure.js
//   $ node make false
//   
//   // MAKES FILE tests/cure.js
//   // additional arguments are ignored when 'tests' or 'test' is used
//   // tests will never be partially compiled or minified
//   $ node make tests

/** @type {!RegExp} */
var jsFileExt;
/** @type {function(string): boolean} */
var isTest;
/** @type {function(string): boolean} */
var isPart;
/** @type {function(string): boolean} */
var isBool;
/** @type {function(string): boolean} */
var isTrue;
/** @type {function(string): boolean} */
var isAll;
/** @type {Array<string>} */
var args;

jsFileExt = /\.js$/;

isTest = (function setup_isTest(/** !RegExp */ tests) {
  return function isTest(str) {
    return tests.test(str);
  };
})(/^tests?$/i);

isPart = (function setup_isPart(/** !RegExp */ parts) {
  return function isPart(str) {
    return parts.test(str);
  };
})(/^(?:all|ajax|array|console|json|object)$/i);

isBool = (function setup_isBool(/** !RegExp */ bools) {
  return function isBool(str) {
    return bools.test(str);
  };
})(/^(?:true|false)$/i);

isTrue = (function setup_isTrue(/** !RegExp */ truth) {
  return function isTrue(str) {
    return truth.test(str);
  };
})(/^true$/i);

isAll = (function setup_isAll(/** !RegExp */ all) {
  return function isAll(str) {
    return all.test(str);
  };
})(/^all$/i);

args = (process.argv[2]) ? process.argv.slice(2) : null;

if (!hasError) {
  parseCmd(args);
}

/**
 * Parse the arguments for the make command.
 * @param {Array<string>} args - The command's arguments.
 */
function parseCmd(args) {

  /** @type {string} */
  var dest;
  /** @type {string} */
  var output;
  /** @type {boolean} */
  var minify;
  /** @type {string} */
  var parts;
  /** @type {string} */
  var arg;

  dest   = 'src';
  output = 'cure';
  minify = true;
  parts  = 'all';

  if (args) {
    arg = args[0];
    if ( isTest(arg) ) {
      dest = 'tests';
      minify = false;
    }
    else {
      if ( isPart(arg) ) {
        if ( !isAll(arg) ) {
          parts = args.join(' ');
        }
      }
      else if ( isBool(arg) ) {
        minify = isTrue(arg);
        arg = args[1];
        if (arg && !isAll(arg)) {
          parts = args.slice(1).join(' ');
        }
      }
      else {
        output = arg;
        arg = args[1];
        if (arg) {
          if ( isBool(arg) ) {
            minify = isTrue(arg);
            arg = args[2];
            if (arg && !isAll(arg)) {
              parts = args.slice(2).join(' ');
            }
          }
          else {
            if ( !isAll(arg) ) {
              parts = args.slice(1).join(' ');
            }
          }
        }
      }
    }
  }

  compileScript(dest, output, minify, parts);
}

/**
 * Compiles cure.js from the parts in the dev folder.
 * @param {string} dest - The folder to place the compiled result.
 * @param {string} output - The output filename.
 * @param {boolean} minify - Whether to minify the output.
 * @param {string} parts - The parts to include in cure.js.
 */
function compileScript(dest, output, minify, parts) {

  if ( !jsFileExt.test(output) ) {
    output += '.js';
  }
  dest = __dirname + '/' + dest + '/' + output;
  parts = isAll(parts) ? 'ajax array console json object' : parts.toLowerCase();

  parts.split(' ').forEach(function(/** string */ part) {
    
  });

  minify && minifyScript(dest);
}

/**
 * Minifies the newly compiled cure.js script.
 * @param {string} file - The file to minify.
 */
function minifyScript(file) {

  /** @type {string} */
  var dest;

  dest = file.replace(jsFileExt, '.min.js');
}