import logo from '../../images/docker.png';
import Post from '../Post/Post.jsx';
import './Header.css';

const getRandomInteger = count => {
  return Math.floor(Math.random() * count);
}

export default function Contaniner() {
  // const headerDescription = ['리액트 스터디', '리액트 연습', '리린이 등장'];
  // const descriptionCount = headerDescription.length;

  // const description = headerDescription[getRandomInteger(descriptionCount)];
  const examples = ['도커란 무엇인가요?', '리액트란 무엇인가요?', '스프링부트란 무엇인가요?', 'Nodejs란 무엇인가요?', '컨테이너가 먼가요?']

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='container'>
        {
          examples.map(exam => {
            return <Post title={exam}/>;
          })
        }
      </div>
    </header>
  );
}