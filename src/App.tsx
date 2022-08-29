import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { customRoutes } from './chore/routes';

export default function App(): ReactElement {
  console.log('1');

  console.log('2');
  return <BrowserRouter>{customRoutes}</BrowserRouter>;
}
