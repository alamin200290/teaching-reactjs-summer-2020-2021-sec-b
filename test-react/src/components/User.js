import './User.css';

const User = ({id, name, dept, deletecallback})=>{
    return(
      
        <div className='user' style={{color:'red'}}>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Dept: {dept}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <button >Edit</button>
        </div>
      
    );
}

export default User;