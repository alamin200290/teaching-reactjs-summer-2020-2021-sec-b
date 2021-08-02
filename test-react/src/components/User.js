import {Link} from 'react-router-dom';
import './User.css';

const User = ({userId, id, title, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>UserID: {userId}</h3>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link>
        </div>
    );
}

export default User;