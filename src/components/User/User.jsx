
import { Link } from 'react-router-dom';
import './user.css'
const User = ({user}) => {
    const{id,name,email,phone}=user;
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>phone_number : {phone}</p>
            <Link to={`/user/${id}`}>View Detail</Link>
        </div>
    );
};

export default User;