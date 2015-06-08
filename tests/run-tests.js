/**
 * -----------------------------------------------------------------------------
 * Cure.js - CLI Command (run-tests)
 * -----------------------------------------------------------------------------
 * @file Handles the 'run-tests' command-line command for Cure.js.
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
// RUN THE TESTS
////////////////////////////////////////////////////////////////////////////////
// The CLI Test Command
// @example $ npm run test

if (!hasError) {
  // TEST SCRIPT TRIGGER GOES HERE
}