import useKeycloakWrapper from 'hooks/useKeycloakWrapper';
import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  role?: string | Array<string>;
  claim?: string | Array<string>;
}

/**
 * A PrivateRoute only allows a user who is authenticated and has the appropriate role(s) or claim(s).
 * @param props - Properties to pass { component, role, claim }
 */
export const PrivateRoute = ({ role, claim, ...rest }: IPrivateRouteProps) => {
  const keycloak = useKeycloakWrapper();
  if (!!keycloak.obj?.authenticated) {
    if ((!role && !claim) || keycloak.hasRole(role) || keycloak.hasClaim(claim)) {
      return <Outlet />;
    } else {
      return <Navigate to="/forbidden" state={{ referer: rest.path }} />;
    }
  }
  return <Navigate to={`/login`} />;
};

export default PrivateRoute;