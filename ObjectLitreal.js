"use strict"

var price=10;
var tax =100;

var productView = {
	price,
	tax,
	calculatePrice(){
		return this.price*this.tax;
	}
};

console.log(productView.calculatePrice()) ;


// set name for json field 

var field ='Sourabh';
var  value = 23;

var productionView = {
	[field] : value
};

console.log(productionView);


// method name in global space 

var method ="call";
var productionOfView = {
	[method + '001'] () {
       console.log('READ');
	}
}

productionOfView[method+'001']();