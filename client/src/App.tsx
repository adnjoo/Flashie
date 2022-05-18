import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Library from './pages/Library';
import Navigation from './components/Navigation';
import CreateCard from './pages/CreateCard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/create" element={<CreateCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
