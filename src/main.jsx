import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Outlet } from 'react-router'
import PageRouter from './Routes/index.jsx'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-N35JR2B9', 
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    
    <BrowserRouter>
    <App />
<PageRouter>
</PageRouter>
<Outlet></Outlet>
    </BrowserRouter>
  </StrictMode>,
)
