import path from 'path';
import fs from 'fs';
import http from 'http';
import User from './User.js';
import Button from './Button.js';

/*const add = "c://windows/sdsdf\\asdasd\\\asd/asd///asd/asd.js";
console.log(path.dirname(add));
console.log(path.extname(add));
console.log(path.normalize(add));*/

//const user1 = new User('alamin', 1234);

const server = http.createServer(function(req, res){
					
	//console.log(req.url);
	//console.log(req.method);

	const updateclick = ()=>{return `alert('this is update ')`};
	const createclick = ()=>{return `alert('this is create ')`};

	if(req.url == '/home'){
		res.write(
			`<h1>welcome, 
			${Button('create', createclick)} -
			${Button('update', updateclick)} </h1>`);
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
