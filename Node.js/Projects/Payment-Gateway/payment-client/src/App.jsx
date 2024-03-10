import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import PaymentSuccess from './components/PaymentSuccess'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
            </Routes>
        </Router>
    )
}

export default App
