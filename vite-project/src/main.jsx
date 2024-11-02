import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Fri from './components/React/Friends.jsx'
import Spread from './components/React/Spread.jsx'
createRoot(document.getElementById('root')).render(
    <Spread></Spread>
)

