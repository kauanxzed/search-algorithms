import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Header from './components/header/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Header />
  </StrictMode>
);
