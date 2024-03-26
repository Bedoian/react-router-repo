import { useLoaderData, useNavigate } from "react-router-dom";

const PostData = () => {
    const PostData=useLoaderData()
    const {body,id,title}=PostData;
    const natit=useNavigate()

    const goBackhandle=()=>{
        natit(-1)
    }
    return (
        <div>
            <h2>{id}</h2>
            <button onClick={goBackhandle}>Go back</button>
        </div>
    );
};

export default PostData;