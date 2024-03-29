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
        link: '/listing',
        items: [
          {
            name: 'Accommodations',
            link: 'add-property',
            
            // badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Transportation',
            link: 'add-vehicle',
           
            // badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Destinations',
            link: 'add-tourist-spot',
            
            // badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Table',
            link: 'table',
          
            // badgeTooltip: 'Products Dashboard - version 3.0'
          }
        ]
      }
    ]
  },

];

export default menuItems;
