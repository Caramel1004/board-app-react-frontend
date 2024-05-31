import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function PostDetilPage(props) {
    const [ post, setPost ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/boards/${id}`);
                
                setPost(response.data);
            } catch (error) {
                new Error('데이터를 가져오지 못했습니다.');
            }
        }
        fetchData();
    },[id]);
    
    console.log(post)
    
    return (
        <>
            <button onClick={clickHandler}>게시물로 이동</button>
            <h1>타이틀: {post.title}</h1>
            <h1>내용: {post.description}</h1>
        </>
    )
}