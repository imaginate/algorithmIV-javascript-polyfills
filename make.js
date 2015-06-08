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
//   $ node make [src|tests=] [output-filename=] [minify-output=] [category...]
//   
//   // CATEGORY OPTIONS
//   // ajax all array console json object
//   
//   // MAKES FILES cure-obj-arr-json.js AND cure-obj-arr-json.min.js
//   $ node make cure-obj-arr-json object array json
//   
//   // MAKES FILES custom-cure.js AND custom-cure.min.js
//   $ node make
//   
//   // MAKES FILE cure-ajax.js
//   $ node make cure-ajax false ajax
//   
//   // MAKES FILE custom-cure.js
//   $ node make false
//   
//   // MAKES FILES src/cure.js AND src/cure.min.js
//   // additional arguments are ignored when the src command is used
//   $ node make src
//   
//   // MAKES FILE tests/cure.js
//   // additional arguments are ignored when the tests or test command is used
//   $ node make tests

/** @type {!RegExp} */
var jsFileExt;
/** @type {function(string): boolean} */
var isSrc;
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
/** @type {function(string): boolean} */
var hasJson;
/** @type {Array<string>} */
var args;

jsFileExt = /\.js$/;

isSrc = (function setup_isSrc(/** !RegExp */ srcs) {
  return function isSrc(str) {
    return srcs.test(str);
  };
})(/^src$/i);

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

hasJson = (function setup_hasJson(/** !RegExp */ parts) {
  return function hasJson(str) {
    return parts.test(str);
  };
})(/\bjson\b/);

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
  var destDir;
  /** @type {string} */
  var output;
  /** @type {boolean} */
  var minify;
  /** @type {string} */
  var parts;
  /** @type {string} */
  var arg;

  destDir = '';
  output  = 'custom-cure';
  minify  = true;
  parts   = 'all';

  if (args) {
    arg = args[0];
    if ( isSrc(arg) ) {
      destDir = 'src/';
      output = 'cure';
    }
    else if ( isTest(arg) ) {
      destDir = 'tests/';
      output = 'cure';
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

  compileScript(destDir, output, minify, parts);
}

/**
 * Compiles cure.js from the parts in the dev folder.
 * @param {string} destDir - The folder to place the compiled result.
 * @param {string} filename - The output filename.
 * @param {boolean} minify - Whether to minify the output.
 * @param {string} parts - The parts to include in cure.js.
 */
function compileScript(destDir, filename, minify, parts) {

  /** @type {string} */
  var fileDest;

  if ( !jsFileExt.test(filename) ) {
    filename += '.js';
  }
  fileDest = destDir + filename;
  parts = isAll(parts) ? 'ajax array console json object' : parts.toLowerCase();

  cd(__dirname);
  cp('-f', 'dev/skeleton.js', fileDest);
  fixLineBreaks(fileDest, true);
  parts.split(' ').forEach( insertScript(fileDest) );
  cleanScript(fileDest, true);

  minify && minifyScript(fileDest, hasJson(parts));
}

/**
 * Minifies the newly compiled script.
 * @param {string} file - The file to minify.
 * @param {boolean} addExterns - Adds externs to the minified script.
 */
function minifyScript(file, addExterns) {

  /** @type {string} */
  var fileDest;

  fileDest = file.replace(jsFileExt, '.min.js');
  cp('-f', file, fileDest);
  removeIntro(fileDest, true);
  removeExterns(fileDest, true);
  exec('java -jar "resources/closure-compiler.jar" --js "' + fileDest + '"')
    .output
    .to(fileDest);
  fixLineBreaks(fileDest, true);
  insertCopyright(fileDest, addExterns);
  addExterns && insertExterns(fileDest);
}

/**
 * Standardize all line breaks in a file.
 * @param {string} file - The file to standardize.
 * @param {boolean=} inplace - Replace the file's contents.
 * @return {string} The fixed file's contents.
 */
function fixLineBreaks(file, inplace) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var fileStr;

  regex = /\r\n?/g;
  fileStr = cat(file);
  return ( (!regex.test(fileStr)) ?
    fileStr : (inplace) ?
      sed('-i', regex, '\n', file) : fileStr.replace(regex, '\n')
  );
}

/**
 * Returns a function that inserts a section of cure.js from ./dev/ into a file.
 * @param {string} filePath - The path to the file to insert a part into.
 * @return {function} The insert function.
 */
function insertScript(filePath) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var filePart;

  return function insertScript(/** string */ part) {
    if (isPart(part) && !isAll(part)) {
      regex = new RegExp('\\n\\/\\/\\sinsert-' + part + '.*\\n');
      filePart = '\n' + fixLineBreaks('dev/' + part + '.js');
      sed('-i', regex, filePart, filePath);
    }
  };
}

/**
 * Removes unused parts from a compiled cure.js file.
 * @param {string} file - The file to clean.
 * @param {boolean=} inplace - Replace the file's contents.
 * @return {string} The cleaned file's contents.
 */
function cleanScript(file, inplace) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var fileStr;

  regex = /\n\n\/\*[\s\S]*?\*\/\n\/\/\sinsert-.*\n/g;
  fileStr = cat(file);
  return ( (!regex.test(fileStr)) ?
    fileStr : (inplace) ?
      sed('-i', regex, '', file) : fileStr.replace(regex, '')
  );
}

/**
 * Removes the intro from a compiled cure.js file.
 * @param {string} file - The file to clean.
 * @param {boolean=} inplace - Replace the file's contents.
 * @return {string} The cleaned file's contents.
 */
function removeIntro(file, inplace) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var fileStr;

  regex = /^(.*\n\n)[\s\S]*?\*\/\n/;
  fileStr = cat(file);
  return ( (!regex.test(fileStr)) ?
    fileStr : (inplace) ?
      sed('-i', regex, '$1', file) : fileStr.replace(regex, '$1')
  );
}

/**
 * Removes the external scripts from a compiled cure.js file.
 * @param {string} file - The file to clean.
 * @param {boolean=} inplace - Replace the file's contents.
 * @return {string} The cleaned file's contents.
 */
function removeExterns(file, inplace) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var fileStr;

  regex = /.*cure-polyfills-begin-flag[\s\S]*?cure-module-begin-flag.*/;
  fileStr = cat(file);
  return ( (!regex.test(fileStr)) ?
    fileStr : (inplace) ?
      sed('-i', regex, '', file) : fileStr.replace(regex, '')
  );
}

/**
 * Inserts the copyright for a minified cure.js file.
 * @param {string} file - The file to update.
 * @param {boolean=} space - If true adds starting line breaks.
 */
function insertCopyright(file, space) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var copyright;

  regex = /^[\s\S]*?blank-line.*\n/;
  copyright = (space) ? '\n\n' : '';
  copyright += fixLineBreaks('resources/minified-copyright.txt');
  sed('-i', regex, copyright, file);
}

/**
 * Inserts the external scripts into a minified cure.js file.
 * @param {string} file - The file to update.
 */
function insertExterns(file) {

  /** @type {!RegExp} */
  var regex;
  /** @type {string} */
  var externs;

  regex = /^\n/;
  externs = cat('dev/json.js').replace(regex, '');
  sed('-i', regex, externs, file);
}