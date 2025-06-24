import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('[main.tsx] Failed to find root element (#root)');
}

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
