import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import ThemeStatus from './components/themeStatus.jsx'
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>
)
