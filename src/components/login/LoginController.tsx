import { ReactElement } from 'react';

import LoginView from './LoginView';

const LoginController = (): ReactElement => {
  const onLoginButtonClick = (): void => {
    console.log('login button pressed');
  };

  return <LoginView onLoginButtonClick={onLoginButtonClick} />;
};

export default LoginController;
