// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.9.4_A4;
* @section: 15.9.4;
* @assertion: The value of the internal [[Prototype]] property of the Date 
* constructor is the Function prototype object;
* @description: Checking Function.prototype.isPrototypeOf(Date);
*/

//CHECK#1
if (!(Function.prototype.isPrototypeOf(Date))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Date constructor is the Function prototype object.');
}
