import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Container } from './Layoyt.styled';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <Container>
      <header className="header">
        <Navigation />
        {isAuthorized ? <UserMenu /> : <AuthNav />}
      </header>
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;
