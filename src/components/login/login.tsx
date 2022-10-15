import {useAuth} from '../../app-providers/auth/auth';

const Login = () => {
  const {isAuthenticated, login, user, logout} = useAuth();

  return (
    <div>
      <button
        aria-label="btn_login"
        onClick={() =>
          login({email: 'calebrussel77@gmail.com', password: '0028'})
        }
      >
        Login
      </button>
      <button aria-label="btn_logout" onClick={logout}>
        Logout
      </button>
      <p>
        {isAuthenticated
          ? `Welcome ${user?.email || 'undefined'}`
          : 'You are not loggedIn'}
      </p>
    </div>
  );
};

export default Login;
