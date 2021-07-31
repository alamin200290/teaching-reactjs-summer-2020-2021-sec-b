import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = ({status, addcallback})=>{
    const {id:eid} = useParams();
    const [user, setUser] = useState({name: '', id:'', dept:''});
    const history = useHistory();

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...user, [attr] : val});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        addcallback(user);
        history.push('/userlist');
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
               <table>
                   <tr>
                       <td>Name</td>
                       <td><input type='text' name='name' value={user.name} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>ID</td>
                       <td><input type='text' name='id' value={user.id} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>dept</td>
                       <td><input type='text' name='dept' value={user.dept} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td><input type='submit' name='submit' value={status}/></td>
                   </tr>
               </table>
           </form>
        </div> 
    );
}

export default AddUser;


//insert
//update
//delete
//selectAll,
//selectbyID