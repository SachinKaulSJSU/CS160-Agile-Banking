import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    router.push('/login');
    return null; // Render nothing while redirecting
  }

  return children; // Render the children components if user is authenticated
};

export default ProtectedRoute;