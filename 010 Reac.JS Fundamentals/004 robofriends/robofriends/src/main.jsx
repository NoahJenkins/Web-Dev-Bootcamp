import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'
import "tachyons/css/tachyons.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello greeting={"Hello" + "Ninja"} />
  </StrictMode>,
)
