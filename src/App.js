import img from './imageInSrc.jpg'
import './App.css';
import './style.css';

function App() {
  return (
    <div>
      <div className="header" style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className="title">Yasmine Bacha</h1>
        <p>
        <img src={img} alt="SRC" style={{width:'300px', height:'200px'}}></img>
        </p>
        <p>
          <img src="/imageInPublic.jpg" alt="public"></img>
        </p>
      </div>
      <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
