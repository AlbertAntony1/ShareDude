import { useNavigate } from "react-router-dom";
import "./pages/css/Common.css";

function App() {
  const navigate = useNavigate();
  
    const handleStartClick = () => {
      navigate('/home');
    };
  return (
    <div className="App">
      <div
      className="LandingPage d-flex justify-content-center align-items-center text-light"
      style={{
        height: '100vh',
        backgroundImage: "url('../images/background_image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px' }}>
        <h1 className="display-4 fw-bold mb-3">Welcome to ShareDude</h1>
        <p className="lead mb-4">
          Share files instantly and chat freely — all in one place. No hassle, no cost.
        </p>
        <button className="btn btn-warning btn-lg px-5" onClick={handleStartClick}>
          Start
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;