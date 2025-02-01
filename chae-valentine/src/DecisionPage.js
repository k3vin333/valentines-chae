import { useLocation, useNavigate } from 'react-router-dom';
import './ValentineButton.css';

export default function DecisionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const restaurant = location.state?.restaurant || "a place"; // Default text if no option is passed

  return (
    <div className="valentine-container">
      <h1>Okay, {restaurant} it is! 🍽️</h1>

      <button className="yes-button" onClick={() => navigate('/')}>
        Start Over
      </button>
    </div>
  );
}
