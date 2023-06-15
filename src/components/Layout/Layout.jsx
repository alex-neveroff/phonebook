import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
