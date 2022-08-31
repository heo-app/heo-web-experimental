import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';

import { customRoutes } from './chore/routes';
import { customTheme } from './chore/themeProvider';

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>{customRoutes}</BrowserRouter>
    </ThemeProvider>
  );
}
