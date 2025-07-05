import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url('https://www.gardenia.net/wp-content/uploads/2024/11/shutterstock_669619393.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  };

  const buttonStyle = {
    marginTop: '2rem',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Paradise Nursery</h1>
      <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '1rem' }}>
        Welcome to Paradise Nursery — your one-stop shop for beautiful, healthy houseplants to brighten your home and bring nature indoors.
      </p>
      <button style={buttonStyle} onClick={() => navigate('/products')}>
        Get Started
      </button>
    </div>
  );
}