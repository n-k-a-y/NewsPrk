import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllFeature from './routes/AllFeature';
import AllEntertainment from './routes/AllEntertainment';
import AllBusiness from './routes/AllBusiness';
import AllSports from './routes/AllSports';
import AllTrending from './routes/AllTrending';
import HomeDark from './routes/HomeDark';
import HomePage from './components/HomePage';
import {createRoot} from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/business" element={<AllBusiness />} />
      <Route path='/entertainment' element={<AllEntertainment/>}/>
      <Route path='/feature' element={<AllFeature/>}/>
      <Route path='/sports' element={<AllSports/>}/>
      <Route path='/trending' element={<AllTrending/>}/>
      <Route path='/homeDark' element={<HomeDark/>}/>
      <Route path='home' element={<App/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
