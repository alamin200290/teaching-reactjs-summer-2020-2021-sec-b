import { useState } from 'react';
import UserList from './components/UserList';
import {users} from './usersData';

function App() {
  
  const [myuser, setUsers] = useState(users);

  const deleteCallback = (id)=>{
    const data = myuser.filter((user)=>user.id !== id);
    setUsers(data);
  }

  return (
    <div >
        <UserList list={myuser} callback={deleteCallback}/>
    </div>
  );
}

export default App;
