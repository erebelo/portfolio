import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/theme'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
