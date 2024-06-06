import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainBoardPage from './pages/MainBoard/MainBoardPage.jsx';
import PostDetailPage from './pages/Post/PostDetailPage.jsx';
import PostAddPage from './pages/Post/PostAddPage.jsx';
import Header from './components/Header/Header.jsx';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/post/:id" element={<PostDetailPage />} exact />
                        <Route path="/" element={<MainBoardPage />} exact />
                        <Route path="/post/create" element={<PostAddPage />} exact />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
