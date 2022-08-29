import { BrowserRouter } from 'react-router-dom';
import { customRoutes } from './chore/routes';

export default function App() {
  return <BrowserRouter>{customRoutes}</BrowserRouter>;
}
  