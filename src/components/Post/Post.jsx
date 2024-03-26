import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const{body,id,title}=post;
    const navigat = useNavigate()

    const handleBtn=()=>{
        navigat(`/post/${id}`)
    }
    return (
        <div className="post">
            <p>{id}</p>
            <h5>{body}</h5>
            <h4>{title}</h4>
            <button onClick={handleBtn}>See more</button>
        </div>
    );
};

export default Post;