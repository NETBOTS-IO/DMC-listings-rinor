import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Login from '../../content/auth/SignIn';

const Authenticated = (props) => {
  const { children } = props;
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    
    return <Login data={isAuthenticated}/>;
  }

  // if (requestedLocation && location.pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
