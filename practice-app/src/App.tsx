import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './lsy.css'
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/styles.css'
import {PageHome, PageState, PageEffect, PageRef, Gnb} from '@/screens';

function App() {

  return (
    <div id="container">
      <Router>
        <Gnb />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/page-state" element={<PageState />} />
          <Route path="/page-effect" element={<PageEffect />} />
          <Route path="/page-ref" element={<PageRef />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
