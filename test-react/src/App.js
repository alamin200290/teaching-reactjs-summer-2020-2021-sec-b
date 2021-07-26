import { useState } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import {users} from './usersData';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  const [myuser, setUsers] = useState(users);

  const deleteCallback = (id)=>{
    const data = myuser.filter((user)=>user.id !== id);
    setUsers(data);
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
            <AddUser status='add'/>
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
