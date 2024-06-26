import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { GlobalProvider } from './Components/GlobalProvider';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
);
