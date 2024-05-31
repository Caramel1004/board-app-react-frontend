import { useEffect, useState } from 'react';
import './PostAddPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PostAddPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const clickHandler = async e => {
        e.preventDefault();
        try {
            console.log(title);
            console.log(description)
            const response = await axios.post('http://localhost:4000/boards/create', {
                title: title,
                description: description,
                status: 'PUBLIC'
            });
            const data = response.data;
            navigate(`/post/${data.id}`);
        } catch (error) {
            new Error('error');
        }
    }

    return (
        <>
            <div className='container'>
                <form className="textarea-container" onSubmit={clickHandler}>
                    <div>
                        <input type="text" placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='textarea-container'>
                        <textarea
                            placeholder="글을 입력하세요."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="submit-button" type="submit">제출</button>
                </form>
            </div>
        </>
    )
}