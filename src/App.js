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
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
          <Route path="/ayala_cs601_finalproject/" element={<Home />} />
          <Route path="/ayala_cs601_finalproject/new-case" element={<NewCase />} />
          <Route path="/ayala_cs601_finalproject/active-cases" element={<ActiveCases />} />
          <Route path="/ayala_cs601_finalproject/attorneys" element={<Attorneys />} /> 
          <Route path="/ayala_cs601_finalproject/kanban" element={<KanbanBoard />} />
          <Route path="/ayala_cs601_finalproject/case/:id" element={<CaseDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
