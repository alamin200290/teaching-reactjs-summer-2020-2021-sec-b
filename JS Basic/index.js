"use strict"

//a = 0;
//var b= 10;
let c=10;
const e =10;

//let student = [1,3,4,'alamin'];
//console.log(student[1]);

/*function sum(a,b){
	return a+b;
}*/

/*const sum = function(a, b){
	return a+b;
}*/


/*const sum = (a, b)=>{
	return a+b;
}*/

/*const sum = (a, b)=> a+b;
console.log(sum(3,5));*/
//console.log(`this is test value: ${c==='10'? 'true':'false'} `);

const student = {
	id: 1,
	name: 'alamin',
	dept: 'SE',
	getName: function(){
		return this.name;
	},
	getObj: function (){
		return {
			version: '1.0',
			getVersion: function(){
				return this.version;
			}
		}
	}
}
//student.name = 'xyz';
//console.log(student['getName']());

//console.log(student.getObj().getVersion());
console.log(student['getObj']()['getVersion']());

const student = ()=>{
	return {
		id: 1,
		name: 'alamin',
		dept: 'SE'
	}
}

const s1 = student();
const s2 = student();
const s3 = student();

