// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A3_T2;
 * @section: 15.9.4.2;
 * @assertion: The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontDelete attribute;
 */

if (delete Date.parse.length  !== false) {
  $ERROR('#1: The Date.parse.length property has the attributes DontDelete');
}

if (!Date.parse.hasOwnProperty('length')) {
  $FAIL('#2: The Date.parse.length property has the attributes DontDelete');
}

