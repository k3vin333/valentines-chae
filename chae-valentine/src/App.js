import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ValentineButton from './ValentineButton';
import SuccessPage from './SuccessPage';
import DecisionPage from './DecisionPage';
import RequestPage from './RequestPage'; // New Page Import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ValentineButton />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/decision" element={<DecisionPage />} />
        <Route path="/request" element={<RequestPage />} /> {/* New Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
