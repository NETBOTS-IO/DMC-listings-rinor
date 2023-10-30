import { element } from 'prop-types';
import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/SuspenseLoader';
import { replace } from 'stylis';


const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);



// company management
// company details
const Company = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Company/Company'))
);
const RegionalSettings = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Company/RegionalSettings'))
);
const TermAndCondition = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Company/TermAndCondition'))
);
const ManageCard = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Company/ManageCard'))
);

// Business Unit
const BusinessRegistration = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/BusinessUnit/BusinessRegistration'))
);

// Staff Management
const StaffRegistration = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/NewStaff'))
);

const SearchStaff = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/SearchStaff'))
);

const ChangePassword = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/ChangePassword'))
);

const ManageRoles = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/ManageRoles'))
);

const ManageTeams = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/ManageTeams'))
);

const ManageDepartments = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/ManageDepartments'))
);

const ManageDesignation = Loader(
  lazy(() => import('../content/Administration/CompanyMangement/Staff/ManageDesignation'))
);

// Content Management

// Air Booking Engine
const ManageFlightDestination = Loader(
  lazy(() => import('../content/Administration/ContentManagement/ManageFlightDestination'))
);

const AirlineSettings = Loader(
  lazy(() => import('../content/Administration/ContentManagement/AirlineSettings'))
);

// Non Air Products
const ManageHotelChainCode = Loader(
  lazy(() => import('../content/Administration/ContentManagement/ManageHotelChainCode'))
);



const administrationRoutes = [
  {
    path: '/',
    element: <Navigate to='company-management' replace />
  },
  {
    path: 'company-management',
    children: [
      {
        path: '/',
        element: <Navigate to='company-details' replace />
      },
      {
        path: 'company-details',
        children: [
          {
            path: '/',
            element: <Navigate to='basic' replace />
          },
          {
            path: 'basic',
            element: <Company />
          },
          {
            path: 'regional-settings',
            element: <RegionalSettings />
          },
          {
            path: 'terms-and-conditions',
            element: <TermAndCondition />
          },
          {
            path: 'manage-card',
            element: <ManageCard />
          }
        ]
      },
      {
        path: 'business-unit',
        children: [
          {
            path: '/',
            element: <Navigate to='business-registration' replace />
          },
          {
            path: 'business-registration',
            element: <BusinessRegistration />
          },
        ]
      },
      {
        path: 'staff-management',
        children: [
          {
            path: '/',
            element: <Navigate to='register-staff' replace />
          },
          {
            path: 'register-staff',
            element: <StaffRegistration />
          },
          {
            path: 'search-staff',
            element: <SearchStaff />
          },
          {
            path: 'change-password',
            element: <ChangePassword />
          },
          {
            path: 'manage-roles',
            element: <ManageRoles />
          },
          {
            path: 'manage-teams',
            element: <ManageTeams />
          },
          {
            path: 'manage-departments',
            element: <ManageDepartments />
          },
          {
            path: 'manage-designation',
            element: <ManageDesignation />
          }
        ]
      }
    ]
  },
  {
    path: 'content-management',
    children: [
      {
        path: '/',
        element: <Navigate to='air-booking-engine' replace />
      },
      {
        path: 'air-booking-engine',
        children: [
          {
            path: '/',
            element: <Navigate to='manage-flight-destination' replace />
          },
          {
            path: 'manage-flight-destination',
            element: <ManageFlightDestination />
          },
          {
            path: 'airline-settings',
            element: <AirlineSettings />
          }
        ]
      },
      {
        path: 'non-air-products',
        children: [
          {
            path: '/',
            element: <Navigate to='manage-hotel-chain-code' replace />
          },
          {
            path: 'manage-hotel-chain-code',
            element: <ManageHotelChainCode />
          }
        ]
      }
    ]
  }

];

export default administrationRoutes;
