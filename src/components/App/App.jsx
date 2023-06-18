import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'components/Layout/Layout';
import { PrivateRoute } from 'components/Navigation/PrivateRoute';
import { RestrictedRoute } from 'components/Navigation/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshCurrentUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  const Contacts = lazy(() => import('../../pages/Contacts'));
  const Home = lazy(() => import('../../pages/Home'));
  const Login = lazy(() => import('../../pages/Login'));
  const Registration = lazy(() => import('../../pages/Registration'));

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                component={Registration}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
};

export default App;
