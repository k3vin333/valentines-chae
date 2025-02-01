import { useNavigate } from 'react-router-dom';
import './ValentineButton.css';

export default function SuccessPage() {
  const navigate = useNavigate();

  const restaurants = [
    "Sushi 🍣",
    "KBBQ 🍖",
    "Ramen 🍜",
    "1KG WINGS 🍗",
    "Hotpot 🍲",
    "Italian 🍕",
    "Surprise 😨",
    "Request 🏃‍♀️"
  ];

  const handleSelection = (restaurant) => {
    if (restaurant === "Request 🏃‍♀️") {
      navigate('/request');
    } else {
      navigate('/decision', { state: { restaurant } });
    }
  };

  return (
    <div className="valentine-container">
      <h1>Where should we eat? 😋</h1>

      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <div 
            key={index} 
            className="restaurant-box" 
            onClick={() => handleSelection(restaurant)}
          >
            {restaurant}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="yes-button" onClick={() => navigate('/')}>
          Start Over
        </button>
      </div>
    </div>
  );
}
