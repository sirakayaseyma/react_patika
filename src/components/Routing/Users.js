import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from 'axios';

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
 

  useEffect(()=>{
       axios('https://jsonplaceholder.typicode.com/users')
       .then((res) => setUsers(res.data))
       .finally(() => setLoading(false));
     
  }, [])
  return (
  

    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
      <ul>
       {
         users.map((user) => (<li key={user.id}>
          <Link to={`/user/${user.id}`}> {user.name}</Link>
          </li>))}

        {/* <li> <Link to="/user/1">User 1 </Link> </li>
        <li> <Link to="/user/2">User 2 </Link> </li>
        <li> <Link to="/user/3">User 3 </Link> </li> */}
      </ul>
    </div>
  )
}

export default Users