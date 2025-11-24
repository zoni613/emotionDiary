import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/NotFound';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {getEmotionImage} from  './util/get-emiotion-image';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  }
  return (
    <>
      <div>
        {/* public 아래 두면 최적화가 일어나지 않아서
            보통 이미지 최적화를 위해 assets 아래 둔다. */}
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>

          {/* public 아래 위치할 경우 아래처럼 url로 불러온다. */}
          {/* <img src="/emotion1.png" /> */}
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/new" element={<New/>}></Route>
        <Route path="/diary/:id" element={<Diary/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </>
  )
}

export default App;
