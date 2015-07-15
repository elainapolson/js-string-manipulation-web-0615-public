'use strict';

var encoder = function(phrase){
  return phrase.replace(" ", "$").toUpperCase();
};
