/* c8 ignore start */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UnitProvider } from './libs/hooks/use-unit/use-unit.tsx';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UnitProvider>
        <App />
      </UnitProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
/* c8 ignore stop */
