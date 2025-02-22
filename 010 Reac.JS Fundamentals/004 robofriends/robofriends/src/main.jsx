import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardList from "./CardList.jsx"
import "tachyons/css/tachyons.min.css";
import { robots } from "./robots.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>,
)
