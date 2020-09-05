import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserSelector } from '../../store/reducers/user';

const PrivateRoute = ({ children, ...remainingProps }) => {
  const userState = useUserSelector();

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        userState.token ? 
          children
          : 
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
      }
    />
  );
};
export default PrivateRoute;
