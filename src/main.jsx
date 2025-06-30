import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageRouter from './Routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'  // ✅ fixed import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageRouter />  {/* ✅ This is your main App routing structure */}
    </BrowserRouter>
  </StrictMode>
)
