import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Delivery from './pages/delivery';
import Payment from './pages/payment';
import AboutUs from './pages/AboutUs';
import Vacancies from './pages/Vacancies';
import FeedBAck from './pages/FeedBAck';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/footer';


function App() {
    return (
           <div>
             <Header />
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/delivery" element={<Delivery />}/>
                <Route path="/delivery" element={<Delivery />}/>
                <Route path="/payment" element={<Payment />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/feedback" element={<FeedBAck />} />

            </Routes>
            <Footer/>
           </div>
    );
}

export default App;
