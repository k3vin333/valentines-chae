import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentineButton.css';

export default function RequestPage() {
  const navigate = useNavigate();
  const [customRequest, setCustomRequest] = useState("");

  const handleSubmit = () => {
    if (customRequest.trim()) {
      navigate('/decision', { state: { restaurant: customRequest } });
    }
  };

  return (
    <div className="valentine-container">
      <h1>Enter Your Request 📝</h1>
      <input
        type="text"
        placeholder="What do you feel like eating?"
        value={customRequest}
        onChange={(e) => setCustomRequest(e.target.value)}
        className="request-input"
      />
      <button className="yes-button" onClick={handleSubmit}>
        Confirm
      </button>
      <button className="no-button" onClick={() => navigate('/success')}>
        Go Back
      </button>
    </div>
  );
}
