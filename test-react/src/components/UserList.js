import User from './User';

const UserList = ({list, callback})=>{
    console.log(list);
    return(
        <div>
            {
                list.map((user)=>{
                    return <User key={user.id} {...user} deletecallback={callback} />
                })
            }
        </div>
    )
}

export default UserList;