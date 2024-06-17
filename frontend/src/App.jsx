import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import './styles/index.css';
import { ThemeProvider } from './context/ThemeContext';
import UpdateEmployee from './pages/UpdateEmployee';
import Logout from './pages/Logout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path='/update-employee/:id' element={<UpdateEmployee />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;