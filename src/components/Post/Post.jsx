import './Post.css';
import docker from '../../images/docker.png'

export default function Post(props) {
    return (
        <>
            <div className='card'>
                <img src={docker}/>
                <h3>{props.title}</h3>
            </div>
        </>
    );
}