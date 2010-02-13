// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.41_A3_T1;
 * @section: 15.9.5.41;
 * @assertion: The Date.prototype.setUTCFullYear property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.setUTCFullYear.length;
Date.prototype.setUTCFullYear.length = 1;
if (Date.prototype.setUTCFullYear.length !== x) {
  $ERROR('#1: The Date.prototype.setUTCFullYear.length has the attribute ReadOnly');
}

