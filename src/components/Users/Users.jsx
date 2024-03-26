import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {

    const users= useLoaderData()
    return (
        <div>
            <h2>This is user Section</h2>
            <ul>
                <li>Mr.Sourav</li>
                <li>Ms.Sourav</li>
                <li>Anotherr Ms</li>
            </ul>
           <div className="users">
           {
                users.map(user=><User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;