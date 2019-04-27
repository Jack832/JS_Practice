"use strict"

var getValue = (constant, tax) =>  {
        var data = constant*4;
        data *= (1+tax);

        return data;	
}

console.log(getValue(3,2));