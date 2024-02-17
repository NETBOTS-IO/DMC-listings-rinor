import ReactDOM from 'react-dom'; // Import createRoot from 'react-dom/client' instead of 'react-dom'
import './mocks';
import './utils/chart';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './hooks/useScrollTop';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './contexts/JWTAuthContext';

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <BrowserRouter>
          <ScrollTop />
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </SidebarProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
