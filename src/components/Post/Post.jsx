import './Post.css';
import docker from '../../images/docker.png'
import { Link } from 'react-router-dom';

export default function Post(props) {
    return (
        <>
            <Link
                className='card' 
                to={`/post/${props.post.id}`}
                post={props.post}
            >
                <img src={docker} />
                {/* <h3>{props.post.id}</h3> */}
                <h3>{props.post.title}</h3>
                <h3>{props.post.description}</h3>
            </Link>
        </>
    );
}