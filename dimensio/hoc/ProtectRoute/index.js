import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProtectRoute = (WrappedComponent) => {
  const Auth = (props) => {
    const isAuthenticated = useSelector(
      (state) => state.global.isAuthenticated
    );
    const router = useRouter();

    if (typeof window !== 'undefined') {
      if (!isAuthenticated) {
        router.push('/login');
        return null;
      }
      console.log(router.pathname);
      return <WrappedComponent {...props} />;
    }
  };

  return Auth;
};

export default ProtectRoute;
