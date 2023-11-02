import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// bookingmanagement
const NewBooking = Loader(lazy(() => import('../content/Booking/NewBooking')));
const Refund = Loader(lazy(() => import('../content/Booking/Refund')));
const Reschedule = Loader(lazy(() => import('../content/Booking/Reschedule')));
const BookingHistory = Loader(
  lazy(() => import('../content/Booking/BookingHistory'))
);
const bookingRoutes = [
  {
    path: '/',
    element: <Navigate to="/new-booking" replace />
  },
  {
    path: 'new-booking',
    element: <NewBooking />
  },
  {
    path: 'refund',
    element: <Refund />
  },
  {
    path: 'reschedule',
    element: <Reschedule />
  },
  {
    path: 'booking-history',
    element: <BookingHistory />
  }
];

export default bookingRoutes;
