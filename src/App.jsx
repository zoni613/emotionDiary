import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/NotFound';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  }
  return (
    <>
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
