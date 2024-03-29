import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from '../components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Blocks

const ChartsLarge = Loader(
  lazy(() => import('../content/blocks/ChartsLarge'))
);
const ChartsSmall = Loader(
  lazy(() => import('../content/blocks/ChartsSmall'))
);
const ComposedCards = Loader(
  lazy(() => import('../content/blocks/ComposedCards'))
);
const Grids = Loader(lazy(() => import('../content/blocks/Grids')));
const IconCards = Loader(lazy(() => import('../content/blocks/IconCards')));
const ImageCards = Loader(lazy(() => import('../content/blocks/ImageCards')));
const ListsLarge = Loader(lazy(() => import('../content/blocks/ListsLarge')));
const ListsSmall = Loader(lazy(() => import('../content/blocks/ListsSmall')));
const Navigation = Loader(lazy(() => import('../content/blocks/Navigation')));
const ProfileCards = Loader(
  lazy(() => import('../content/blocks/ProfileCards'))
);
const ProgressCircular = Loader(
  lazy(() => import('../content/blocks/ProgressCircular'))
);
const ProgressHorizontal = Loader(
  lazy(() => import('../content/blocks/ProgressHorizontal'))
);
const SparklinesLarge = Loader(
  lazy(() => import('../content/blocks/SparklinesLarge'))
);
const SparklinesSmall = Loader(
  lazy(() => import('../content/blocks/SparklinesSmall'))
);
const StatisticsBlocks = Loader(
  lazy(() => import('../content/blocks/Statistics'))
);

const blocksRoutes = [
  {
    path: '/',
    element: <Navigate to="charts-large" replace />
  },
  {
    path: 'charts-large',
    element: <ChartsLarge />
  },
  {
    path: 'charts-small',
    element: <ChartsSmall />
  },
  {
    path: 'composed-cards',
    element: <ComposedCards />
  },
  {
    path: 'grids',
    element: <Grids />
  },
  {
    path: 'icon-cards',
    element: <IconCards />
  },
  {
    path: 'image-cards',
    element: <ImageCards />
  },
  {
    path: 'lists-large',
    element: <ListsLarge />
  },
  {
    path: 'lists-small',
    element: <ListsSmall />
  },
  {
    path: 'navigation',
    element: <Navigation />
  },
  {
    path: 'profile-cards',
    element: <ProfileCards />
  },
  {
    path: 'progress-circular',
    element: <ProgressCircular />
  },
  {
    path: 'progress-horizontal',
    element: <ProgressHorizontal />
  },
  {
    path: 'sparklines-large',
    element: <SparklinesLarge />
  },
  {
    path: 'sparklines-small',
    element: <SparklinesSmall />
  },
  {
    path: 'statistics',
    element: <StatisticsBlocks />
  }
];

export default blocksRoutes;
