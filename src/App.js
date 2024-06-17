import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewCase from './pages/NewCase';
import ActiveCases from './pages/ActiveCases';
import Attorneys from './pages/Attorneys';
import KanbanBoard from './pages/KanbanBoard';
import CaseDetails from './pages/CaseDetails';
import './App.css';

function App() {
  return (
    <Router basename="/ayala_cs601_finalproject">
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-case" element={<NewCase />} />
            <Route path="/active-cases" element={<ActiveCases />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/case/:id" element={<CaseDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
