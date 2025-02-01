import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentineButton.css';

export default function ValentineButton() {
  const [yesScale, setYesScale] = useState(1);
  const [noVisible, setNoVisible] = useState(true);
  const navigate = useNavigate();

  const handleNoClick = () => {
    const newScale = yesScale * 1.3;
    setYesScale(newScale);
    
    // Hide No button after 5 clicks
    if (newScale > 5) {
      setNoVisible(false);
    }
  };

  return (
    <div className="valentine-container">
      <h1>Chaewon!!!! Will you be my Valentine? 👁️👅👁️</h1>
      <div className="buttons-container">
        <button
          className="yes-button"
          style={{ 
            transform: `scale(${yesScale})`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onClick={() => navigate('/success')}
        >
          YES!
        </button>
        
        {noVisible && (
          <button
            className="no-button"
            onClick={handleNoClick}
          >
            No
          </button>
        )}
      </div>
    </div>
  );
}