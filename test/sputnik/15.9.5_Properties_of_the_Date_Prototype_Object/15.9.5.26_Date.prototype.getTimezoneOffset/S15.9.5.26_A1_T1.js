// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.26_A1_T1;
 * @section: 15.9.5.26;
 * @assertion: The Date.prototype property "getTimezoneOffset" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.getTimezoneOffset;
if(x === 1)
  Date.prototype.getTimezoneOffset = 2;
else
  Date.prototype.getTimezoneOffset = 1;
if (Date.prototype.getTimezoneOffset === x) {
  $ERROR('#1: The Date.prototype.getTimezoneOffset has not the attribute ReadOnly');
}

