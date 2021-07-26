import {useParams} from 'react-router-dom';

const AddUser = ({status})=>{
    const {id:eid} = useParams();
    return(
        <div>
           <h2> This is {status} user page id: {eid} </h2>
        </div> 
    );
}

export default AddUser;