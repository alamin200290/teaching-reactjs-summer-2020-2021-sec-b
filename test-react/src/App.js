import { useState } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import {users} from './usersData';
import { useFetch } from './components/useFetch';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  const [myuser, setUsers] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useFetch(url, setUsers);

  const deleteCallback = (id)=>{
    const data = myuser.filter((user)=>user.id !== id);
    setUsers(data);
  }

  const adduser = (user)=>{
      setUsers([...myuser, user]);
  }

  return (
   
    <Router>
        <Navbar/>
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route path='/userlist'>
          <div >
            <UserList list={myuser} callback={deleteCallback}/>
          </div>
        </Route>
        <Route path='/Create'>
            <AddUser status='add' addcallback={adduser}/>
        </Route>
        <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route>
        <Route path='*'>
            <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
