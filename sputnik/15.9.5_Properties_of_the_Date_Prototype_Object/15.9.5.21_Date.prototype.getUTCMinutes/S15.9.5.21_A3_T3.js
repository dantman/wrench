// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.21_A3_T3;
 * @section: 15.9.5.21;
 * @assertion: The Date.prototype.getUTCMinutes property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.getUTCMinutes.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.getUTCMinutes.length property has the attribute DontEnum');
}

for(x in Date.prototype.getUTCMinutes) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.getUTCMinutes.length has the attribute DontEnum');
  }
}

