"use strict"

//a = 0;
//var b= 10;
/*let c=10;
const e =10;*/

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

/*const student = {
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
}*/
//student.name = 'xyz';
//console.log(student['getName']());

//console.log(student.getObj().getVersion());
//console.log(student['getObj']()['getVersion']());

/*const student = ()=>{
	return {
		id: 1,
		name: 'alamin',
		dept: 'SE'
	}
}

const s1 = student();
const s2 = student();
const s3 = student();*/

/*let student = ['ALAMIN', 'RAKIB', 'ABIR', 'RAZIB'];
let numbers = [1,10,20,30,40];*/

/*let newarray = student.filter(function(std){
	return std[1] == 'A';
});*/

/*let newarray = student.filter((std)=>std[1] == 'A');
console.log(newarray);*/

/*let newarray = student.join('-');
console.log(newarray);*/

/*let newarray = numbers.map((value)=>{
	return value + 5;
})

newarray = newarray.filter((num)=> num > 20)
console.log(newarray);*/


/*const student = {id: 1, name: 'xyz', email: 'alamin@aiub.edu'}
let {id, name:myname} = student;
console.log(myname);*/


/*const newarray = [...student, '|', ...numbers];
console.log(newarray);*/

/*const student = require('./student');
const s1 = student();
const s2 = student();
console.log(s1.name);
*/

//callback
//Promise
//async/await

/*const f2 = (f)=>{
	sum = 10;
	//need 10s time...
	f(sum);
	
}

f2((sum)=>{
	//need 10s time..
	console.log(`the value is: ${sum}`);
});


console.log('another task...');*/


/*setTimeout(function(){ 
	console.log('after 3s...')
},3000);

setTimeout(function(){ 
	console.log('after 5s...')
},5000);

setTimeout(function(){ 
	console.log('after 2s...')
},2000);

setTimeout(function(){ 
	console.log('after 1s...')
},1000);

setTimeout(function(){ 
	console.log('after 4s...')
},4000);
*/


/*const p = new Promise((resolve, reject)=>{
	if(40+10 == 50){
		resolve('task done ...');
	}else{
		reject('error...');
	}
});

p.then(a=>{
	console.log(a);
}).catch(e=>{
	console.log(e);
})*/
/*

function sum(a, b){
	return new Promise((resolve, reject)=>{
		if(a+b == 50){
			setTimeout(()=>{
				resolve('done');
			}, 3000);
		}else{
			reject('error');
		}
	})
}


sum(30,20).then(msg=>{
	console.log(msg)
}).catch(error=>{
	console.log(error)
})

*/
//console.log('another task...');

/*function sum(a, b){
	return new Promise((resolve, reject)=>{
		if(a+b == 50){
			setTimeout(()=>{
				resolve(a+b);
			}, 3000);
		}else{
			reject('error');
		}
	})
}

async function processmytask(a,b){
	console.log('processing started...');
	try{
		const total = await sum(a,b);
		console.log(`my total: ${total}`);
	}catch{
		console.log('error...');
	}
}*/

//processmytask(40,10);
//console.log('another task...')

/*function sum2(a, b){
	if(a+b == 50){
		setTimeout(()=>{
			return a+b;
		}, 3000);
	}else{
		return 'error';
	}
}*/

/*function processmytask2(a,b){
	const total = sum2(a,b);
	console.log(`my total: ${total}`);
}

processmytask2(30, 20);
console.log('test this line')
*/


/*class Student{
	
	constructor(id, name, email){
		this.id = id;
		this.name = name;
		this.email = email;
	}

	getName(){
		return this.name;
	}
}
*/


import {User} from './User';
const u1 = new User(1,'alamin', 'alamin@aiub.edu');
console.log(u1.name);
console.log(u1.getName());
