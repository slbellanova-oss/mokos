import { createBrowserRouter, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';
import { CookieConsent } from './components/CookieConsent';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <CookieConsent />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/menu', element: <Menu /> },
      { path: '/contacts', element: <Contacts /> },
    ],
  },
]);