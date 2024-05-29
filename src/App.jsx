import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainBoardPage from './pages/MainBoard/MainBoardPage.jsx';
import PostDetailPage from './pages/Post/PostDetailPage.jsx';
import PostAddPage from './pages/Post/PostAddPage.jsx';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/post/:id" element={<PostDetailPage />} exact />
                    <Route path="/" element={<MainBoardPage />} exact />
                    <Route path="/post/create" element={<PostAddPage />} exact />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
