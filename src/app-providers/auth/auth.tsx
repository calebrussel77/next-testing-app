/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type User = {
  email: string;
  password: string;
};

type contextValueProps = {
  user: User | undefined;
  isAuthenticated: boolean;
  login: (form: User) => void;
  logout: () => void;
};

const AuthContext = createContext<contextValueProps>({
  user: undefined,
  isAuthenticated: false,
  login: (_data: User) => undefined,
  logout: () => undefined,
});

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<undefined | User>(undefined);

  const login = useCallback(({email, password}: User) => {
    if (email === 'calebrussel77@gmail.com') {
      setUser({email, password});
      return;
    }
    setUser(undefined);
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);

  const contextValue = useMemo(
    () => ({user, login, isAuthenticated: !!user, logout}),
    [login, logout, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context: contextValueProps = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export {AuthProvider, useAuth};
