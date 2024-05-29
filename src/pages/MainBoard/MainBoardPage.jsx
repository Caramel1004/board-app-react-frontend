import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../images/docker.png';
import Post from '../../components/Post/Post.jsx'
import './MainBoard.css';

export default function MainBoardPage(props) { // Renamed function
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:4000/boards`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        
        fetchData();
    },[]);
    
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='container'>
                {
                    posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </header>
    );
}