// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.39_A1_T1;
 * @section: 15.9.5.39;
 * @assertion: The Date.prototype property "setUTCMonth" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.setUTCMonth;
if(x === 1)
  Date.prototype.setUTCMonth = 2;
else
  Date.prototype.setUTCMonth = 1;
if (Date.prototype.setUTCMonth === x) {
  $ERROR('#1: The Date.prototype.setUTCMonth has not the attribute ReadOnly');
}

