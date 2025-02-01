import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ValentineButton from './ValentineButton';
import SuccessPage from './SuccessPage';
import DecisionPage from './DecisionPage';
import RequestPage from './RequestPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentineButton />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/decision" element={<DecisionPage />} />
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
