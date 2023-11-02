import { useRoutes } from 'react-router-dom';
import router from './router';

import { SnackbarProvider } from 'notistack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import useAuth from './hooks/useAuth';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import AppInit from './components/AppInit';

function App() {
  const content = useRoutes(router);
  const auth = useAuth();

  return (
    <ThemeProvider>
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <CssBaseline />
        {auth.isInitialized ? content : <AppInit />}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default App;
