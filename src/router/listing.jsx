import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
    <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
    </Suspense>
);

// listing
const Accommodations = Loader(lazy(() => import("../content/Listing/Accomodations/index")));
const Transportation = Loader(lazy(() => import("../content/Listing/Accomodations/index")));
const Destination = Loader(lazy(() => import("../content/Listing/Accomodations/index")));
const SelectOptions = Loader(lazy(() => import("../content/Listing/Accomodations/index")));

const listingRoutes = [
    {
        path: '/',
        element: <Navigate to="/select-options" replace />
    },
    {
        path: 'select-options',
        element: <SelectOptions />
    },
    {
        path: 'add-property',
        element: <Accommodations />
    },
    {
        path: 'add-vehicle',
        element: <Transportation />
    },
    {
        path: 'add-tourist-spot',
        element: <Destination />
    }
];


export default listingRoutes;
