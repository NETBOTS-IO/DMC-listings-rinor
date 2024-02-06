import { useRoutes } from 'react-router-dom';
import router from './router';
import { Route, Routes } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import useAuth from './hooks/useAuth';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import AppInit from './components/AppInit';

import Login from './content/auth/SignIn';
import Register from './content/auth/SignUp'
import AccentSidebarLayout from './layouts/AccentSidebarLayout';
import Accommodations from './content/Listing/Accomodations';
import Transportation from './content/Listing/Transportation';
import Destination from './content/Listing/Destinations';
import Table from './content/Listing/Accomodations/Table';


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
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listing' element={<AccentSidebarLayout />}>
            <Route path='add-property' element={<Accommodations />} />
            <Route path='add-vehicle' element={<Transportation />} />
            <Route path='add-tourist-spot' element={<Destination />} />
            <Route path='table' element={<Table />} />
          </Route>
        </Routes>
        {/* {auth.isInitialized ? content : <AppInit />} */}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default App;
