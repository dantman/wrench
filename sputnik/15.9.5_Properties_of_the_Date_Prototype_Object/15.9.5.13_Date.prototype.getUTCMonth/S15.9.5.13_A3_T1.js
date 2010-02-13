// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.13_A3_T1;
 * @section: 15.9.5.13;
 * @assertion: The Date.prototype.getUTCMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.getUTCMonth.length;
Date.prototype.getUTCMonth.length = 1;
if (Date.prototype.getUTCMonth.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCMonth.length has the attribute ReadOnly');
}

