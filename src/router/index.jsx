import Authenticated from '../components/Authenticated';
import { Navigate } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import AccentSidebarLayout from '../layouts/AccentSidebarLayout';
// import dashboardsRoutes from './dashboards';
import blocksRoutes from './blocks';
import applicationsRoutes from './applications';
// import managementRoutes from './management';
import accountRoutes from './account';
import baseRoutes from './base';
// import bookingRoutes from './booking';
// import administrationRoutes from './administration';
import listingRoutes from './listing';

const router = [
  {
    path: 'account',
    children: accountRoutes
  },
  {
    path: '*',
    element: <BaseLayout />,
    children: baseRoutes
  },

  // Accent Sidebar Layout

  {
    path: '/',
    element: (
      <Authenticated>
        <AccentSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: 'listing',
        children: listingRoutes
      },
      {
        path: 'blocks',
        children: blocksRoutes
      },
      {
        path: 'applications',
        children: applicationsRoutes
      },
    ]
  }
];

export default router;
