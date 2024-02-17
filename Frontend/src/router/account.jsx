import { Suspense, lazy } from 'react';

import SuspenseLoader from '../components/SuspenseLoader';
import Guest from '../components/Guest';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Account
const Login_N =Loader(
  lazy(()=>import('../content/auth/SignIn'))
);
const Register =Loader(
  lazy(()=>import('../content/auth/SignUp'))
);
// const LoginCover = Loader(
//   lazy(() => import('../content/pages/Auth/Login/Cover'))
// );
// const LoginBasic = Loader(
//   lazy(() => import('../content/pages/Auth/Login/Basic'))
// );

// const RegisterCover = Loader(
//   lazy(() => import('../content/pages/Auth/Register/Cover'))
// );
// const RegisterBasic = Loader(
//   lazy(() => import('../content/pages/Auth/Register/Basic'))
// );
// const RegisterWizard = Loader(
//   lazy(() => import('../content/pages/Auth/Register/Wizard'))
// );

// const RecoverPassword = Loader(
//   lazy(() => import('../content/pages/Auth/RecoverPassword'))
// );

const accountRoutes = [
  {
    path:'/',
    element: <Login_N/>,
  },
  {
    path:'register',
    element: <Register/>,
  }
  // {
  //   path: 'login',
  //   element: (
  //     <Guest>
  //       <LoginCover />
  //     </Guest>
  //   )
  // },
  // {
  //   path: 'register',
  //   element: (
  //     <Guest>
  //       <RegisterCover />
  //     </Guest>
  //   )
  // },
  // {
  //   path: 'login-basic',
  //   element: <LoginBasic />
  // },
  // {
  //   path: 'login-cover',
  //   element: <LoginCover />
  // },
  // {
  //   path: 'recover-password',
  //   element: <RecoverPassword />
  // },
  // {
  //   path: 'register',
  //   element: (
  //     <Guest>
  //       <RegisterCover />
  //     </Guest>
  //   )
  // },
  // {
  //   path: 'register-basic',
  //   element: <RegisterBasic />
  // },
  // {
  //   path: 'register-cover',
  //   element: <RegisterCover />
  // },
  // {
  //   path: 'register-wizard',
  //   element: <RegisterWizard />
  // }
];

export default accountRoutes;
