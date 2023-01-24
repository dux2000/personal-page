import './App.css';
import Spline from '@splinetool/react-spline';
import Content from './Content';
function App() {

  return (
    <div className="wrapper">
      <Spline className="spline" scene="https://prod.spline.design/rlHDE4IoSO9B5nhk/scene.splinecode" />
      <Content />
    </div>
  );
}

export default App;
