import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CartProvider } from './components/CartContext';
import { Preloader } from './components/Preloader';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);