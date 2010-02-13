// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.6_A1_T2;
 * @section: 15.9.5.6;
 * @assertion: The Date.prototype property "toLocaleDateString" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */

if (delete Date.prototype.toLocaleDateString  === false) {
  $ERROR('#1: The Date.prototype.toLocaleDateString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toLocaleDateString')) {
  $FAIL('#2: The Date.prototype.toLocaleDateString property has not the attributes DontDelete');
}

