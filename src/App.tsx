import './App.css';
import Spline from '@splinetool/react-spline';
import Content from './Content';
function App() {
  let details = navigator.userAgent
  let regexp = /android|iphone|kindle|ipad/i;
  let isLaptop = regexp.test(details);
  return (
    <div className="wrapper">
      {!isLaptop && <Spline className="spline" scene="https://prod.spline.design/rlHDE4IoSO9B5nhk/scene.splinecode" />}
      <Content />
    </div>
  );
}

export default App;
