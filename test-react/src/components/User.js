import {Link} from 'react-router-dom';
import './User.css';

const User = ({id, name, dept, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Dept: {dept}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link>
        </div>
    );
}

export default User;