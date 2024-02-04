import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { namespace } from 'stylis';

const menuItems = [
  {
    heading: 'Listing ',
    items: [
      {
        name: 'Property Listing',
        icon: SmartToyTwoToneIcon,
        link: '/accent-sidebar/listing',
        items: [
          {
            name: 'Accommodations',
            link: 'listing/add-property',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Transportation',
            link: 'listing/add-vehicle',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Destinations',
            link: 'listing/add-tourist-spot',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Table',
            link: 'listing/table',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          }
        ]
      }
    ]
  },

];

export default menuItems;
