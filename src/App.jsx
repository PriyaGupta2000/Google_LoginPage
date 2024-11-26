import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
// Import other pages like SignUp if needed
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add routes for other pages */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 