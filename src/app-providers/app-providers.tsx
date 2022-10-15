import {FC} from 'react';

import {AuthProvider} from './auth/auth';

const AppProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export {AppProviders};
