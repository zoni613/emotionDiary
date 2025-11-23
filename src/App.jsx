import './App.css';
import Register from './components/Resiter';
import HookExam from './components/HookExam';

// Re-Rendering이 일어나느 경어
// 1. 자신의 state 값 변경
// 2. props의 값 변경
// 3. 부모 컴포넌트의 Re-Rendering


// 컴포넌트 명은 반드시 첫 글자는 대문자로 작성해야
// 리액트 내부에서 컴포넌트로 인식됨
function App() {

  // Javascript의 일반 변수와는 다르게
  // state 변수는 변화하면 Re-Rendering이 일어난다.(props도 마찬가지)

  return (
    <>
    <HookExam/>
    </>
  )
}

export default App
