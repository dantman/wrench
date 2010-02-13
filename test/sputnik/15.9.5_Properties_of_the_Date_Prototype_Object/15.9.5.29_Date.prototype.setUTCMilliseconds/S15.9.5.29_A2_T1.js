// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.29_A2_T1;
 * @section: 15.9.5.29;
 * @assertion: The "length" property of the "setUTCMilliseconds" is 1;
 * @description: The "length" property of the "setUTCMilliseconds" is 1;
 */

if(Date.prototype.setUTCMilliseconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCMilliseconds has a "length" property');
}

if(Date.prototype.setUTCMilliseconds.length !== 1){
  $ERROR('#2: The "length" property of the setUTCMilliseconds is 1');
}

