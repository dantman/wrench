// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.32_A1_T1;
 * @section: 15.9.5.32;
 * @assertion: The Date.prototype property "setMinutes" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.setMinutes;
if(x === 1)
  Date.prototype.setMinutes = 2;
else
  Date.prototype.setMinutes = 1;
if (Date.prototype.setMinutes === x) {
  $ERROR('#1: The Date.prototype.setMinutes has not the attribute ReadOnly');
}

