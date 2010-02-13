// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.6_A1_T1;
 * @section: 15.9.5.6;
 * @assertion: The Date.prototype property "toLocaleDateString" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.toLocaleDateString;
if(x === 1)
  Date.prototype.toLocaleDateString = 2;
else
  Date.prototype.toLocaleDateString = 1;
if (Date.prototype.toLocaleDateString === x) {
  $ERROR('#1: The Date.prototype.toLocaleDateString has not the attribute ReadOnly');
}

