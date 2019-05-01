"use strict"

example of REST . 
build the list of array .
var data = function ( dataPara, ...categories){

	console.log(categories);
}

data(1212,1,2,3,4)


// Spread Example 

var data = [1,2,3,4,67,12];   -- output will be 67
// or we can use string array ----> var data = "1234672";  -- output will be 7

var getMax = Math.max(...data);
console.log(getMax);


