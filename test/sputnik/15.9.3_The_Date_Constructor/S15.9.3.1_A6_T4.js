// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.3.1_A6_T4;
 * @section: 15.9.3.1;
 * @assertion: The [[Value]] property of the newly constructed object 
 * with supplied "undefined" argument should be NaN;
 * @description: 5 arguments, (year, month, date, hours, minutes);
 */

function DateValue(year, month, date, hours, minutes, seconds, ms){
  return new Date(year, month, date, hours, minutes, seconds, ms).valueOf();
}

if (!isNaN(DateValue(1899, 11, 31, 23, 59))) {
  $FAIL("#1: The value should be NaN");
}

if (!isNaN(DateValue(1899, 12, 1, 0, 0))) {
  $FAIL("#2: The value should be NaN");
}

if (!isNaN(DateValue(1900, 0, 1, 0, 0))) {
  $FAIL("#3: The value should be NaN");
}

if (!isNaN(DateValue(1969, 11, 31, 23, 59))) {
  $FAIL("#4: The value should be NaN");
}

if (!isNaN(DateValue(1969, 12, 1, 0, 0))) {
  $FAIL("#5: The value should be NaN");
}

if (!isNaN(DateValue(1970, 0, 1, 0, 0))) {
  $FAIL("#6: The value should be NaN");
}

if (!isNaN(DateValue(1999, 11, 31, 23, 59))) {
  $FAIL("#7: The value should be NaN");
}

if (!isNaN(DateValue(1999, 12, 1, 0, 0))) {
  $FAIL("#8: The value should be NaN");
}

if (!isNaN(DateValue(2000, 0, 1, 0, 0))) {
  $FAIL("#9: The value should be NaN");
}

if (!isNaN(DateValue(2099, 11, 31, 23, 59))) {
  $FAIL("#10: The value should be NaN");
}

if (!isNaN(DateValue(2099, 12, 1, 0, 0))) {
  $FAIL("#11: The value should be NaN");
}

if (!isNaN(DateValue(2100, 0, 1, 0, 0))) {
  $FAIL("#12: The value should be NaN");
}
