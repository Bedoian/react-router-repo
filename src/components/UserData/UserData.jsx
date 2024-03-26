import { useLoaderData } from "react-router-dom";

const UserData = () => {
   const userData= useLoaderData()
   const {id,name,email,phone}=userData;
    return (
        <div>
            <h3>{name}</h3>
            <p>his/her email : {email}</p>

        </div>
    );
};

export default UserData;