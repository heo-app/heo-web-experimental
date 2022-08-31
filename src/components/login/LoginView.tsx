import { ReactElement } from 'react';
import { TextField } from '@mui/material';

import { useStyles } from './LoginStyles';

const LoginView = (): ReactElement => {
  const classes = useStyles();

  return <div className={classes.content}>login please</div>;
};

export default LoginView;
