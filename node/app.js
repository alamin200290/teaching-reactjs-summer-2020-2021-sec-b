import path from 'path';
import fs from 'fs';
import http from 'http';
import User from './User.js';
import Button from './Button.js';
import index from './index.js';
import UserList from './UserList.js';

/*const add = "c://windows/sdsdf\\asdasd\\\asd/asd///asd/asd.js";
console.log(path.dirname(add));
console.log(path.extname(add));
console.log(path.normalize(add));*/

//const user1 = new User('alamin', 1234);

const server = http.createServer(function(req, res){
					
	//console.log(req.url);
	//console.log(req.method);

	const users = [
		{ id: 1, name: 'alamin', dept: 'cs'},
		{ id: 2, name: 'xyz', dept: 'CSE'},
		{ id: 3, name: 'abc', dept: 'CIS'},
		{ id: 4, name: 'pqr', dept: 'SE'}
	];

	const updateclick = ()=>{return `alert('this is update ')`};
	const createclick = ()=>{return `alert('this is create ')`};

	if(req.url == '/style.css'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/edit'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/home'){
		res.write(index('home', UserList(users)));
		res.end();						
	}

	if(req.url == '/login'){
		//res.writeHead(200, {'content-type':'text/html'});
		//res.write('<h5>login page</h5>');
		//res.end();
		fs.createReadStream('login.html').pipe(res);					
	}					
});


server.listen(8000);
console.log('node server started at 8000');
