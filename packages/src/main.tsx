import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../src/index.css'
import { AppRouter } from './routes/AppRouter.tsx'
import '@primer/react-brand/lib/css/main.css'
import {ThemeProvider} from '@primer/react-brand'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

