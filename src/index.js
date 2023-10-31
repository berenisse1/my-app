import About from "./pages/About/About"
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Logement from "./pages/Logement/Logement";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/logements/:id" element={<Logement/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)