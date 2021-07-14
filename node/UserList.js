import User from './User.js';

export default function UserList(users){

	return (
		`<table border=1>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPT</th>
                <th>Action</th>
            </tr>
          
            ${
                users.map((user)=>{
                    return User(user);
                }).join(" ")
            }
        </table>`
	);
}
