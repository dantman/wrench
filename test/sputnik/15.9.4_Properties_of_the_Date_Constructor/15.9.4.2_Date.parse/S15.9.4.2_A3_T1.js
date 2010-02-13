// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A3_T1;
 * @section: 15.9.4.2;
 * @assertion: The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */

x = Date.parse.length;
Date.parse.length = 1;
if (Date.parse.length !== x) {
  $ERROR('#1: The Date.parse.length has the attribute ReadOnly');
}

