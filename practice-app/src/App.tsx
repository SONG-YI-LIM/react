import './lsy.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/styles.css'
import {PageHome, PageState, PageEffect, PageRef, PagePractice, Gnb} from '@/screens';

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
          <Route path="/page-practice" element={<PagePractice />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
