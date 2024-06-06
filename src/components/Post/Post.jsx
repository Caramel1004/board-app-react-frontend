import './Post.css';
import docker from '../../images/docker.png'
import { Link } from 'react-router-dom';

export default function Post(props) {
    return (
        <>
            <Link
                className='contents__div-wrapper'
                to={`/post/${props.post.id}`}
                post={props.post}
            >
                <img src={docker} />
                    <div className='card-day'>
                        <span>슬기로운생활 | 2024.05.24</span>
                    </div>
                <div className='card'>
                    <div className='card-title'>
                        <span>{props.post.title}</span>
                    </div>
                </div>
                    <div className='card-summary'>
                        <span>{props.post.description}</span>
                    </div>
            </Link>
        </>
    );
}