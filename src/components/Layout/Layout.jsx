import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Layout = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <div>
      <header>
        <Navigation />
        {isAuthorized ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
