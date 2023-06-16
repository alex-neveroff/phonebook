import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'components/Layout/Layout';
import { PrivateRoute } from 'components/Navigation/PrivateRoute';
import { RestrictedRoute } from 'components/Navigation/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const Contacts = lazy(() => import('../../pages/Contacts'));
  const Home = lazy(() => import('../../pages/Home'));
  const Login = lazy(() => import('../../pages/Login'));
  const Registration = lazy(() => import('../../pages/Registration'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="registration"
          element={
            <RestrictedRoute component={Registration} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
