import { FC } from 'react';
import { TextField } from '@mui/material';

import { useStyles } from './LoginStyles';
import type { LoginViewProps } from './LoginTypes';

const LoginView: FC<LoginViewProps> = (props) => {
  const { onLoginButtonClick } = props;
  const classes = useStyles();

  return <div className={classes.content}>login please</div>;
};

export default LoginView;
