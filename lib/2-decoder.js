'use strict';

var decoder = function(phrase){
  return phrase.charAt(0).toUpperCase() + phrase.slice(1).replace("$", " ").toLowerCase();
};
