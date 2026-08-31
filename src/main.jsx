/**
 * Copyright (c) 2026 Daniyal.dev All rights reserved.
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx';

/**
 *  CSS Link
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
