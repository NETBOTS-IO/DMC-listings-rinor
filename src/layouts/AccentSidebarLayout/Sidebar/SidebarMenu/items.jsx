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
          }
        ]
      }
    ]
  },
  {
    heading: 'General',
    items: [
      {
        name: 'Booking Management',
        icon: AddCircleOutlineIcon,
        link: '/booking',
        items: [
          {
            name: 'New Booking ',
            link: '/booking/new-booking'
          },
          {
            name: 'Refund',
            link: '/booking/refund'
          },
          {
            name: 'Rees',
            link: '/booking/reschedule'
          },
          {
            name: 'Booking History',
            link: '/booking/booking-history'
          }
        ]
      },

      {
        name: 'Client Management',
        icon: PersonIcon,
        link: '/client',
        items: [
          {
            name: 'Register client',
            link: '/client/register-client'
          },
          {
            name: 'View Client',
            link: '/client/view-client'
          },
          {
            name: 'Modify Client',
            link: '/client/modify-client'
          },
          {
            name: 'Search Client',
            link: '/client/search-client'
          },
          {
            name: 'Client Queries',
            link: '/client/client-queries'
          },
          {
            name: 'Client Bookings',
            link: '/client/client-bookings'
          },
          {
            name: 'Supplier Credentials',
            link: '/client/supplier',
            items: [
              {
                name: 'Basic',
                link: '/client/supplier/basic'
              }
            ]
          }
        ]
      },
      {
        name: 'Administration',
        link: '/administration',
        icon: AccountBalanceIcon,
        items: [
          {
            name: 'Company Management',
            link: '/administration/company-management',
            items: [
              {
                name: 'Company Details',
                link: '/administration/company-management/company-details',
                items: [
                  {
                    name: 'Basic',
                    link: '/administration/company-management/company-details/basic'

                  },
                  {
                    name: 'Regional Settings',
                    link: '/administration/company-management/company-details/regional-settings'
                  },
                  {
                    name: 'Terms and Conditions',
                    link: '/administration/company-management/company-details/terms-and-conditions'
                  },
                  {
                    name: 'Manage Card',
                    link: '/administration/company-management/company-details/manage-card'
                  },

                ]

              },

              {
                name: 'Business Unint',
                link: '/administration/company-management/business-unit',
                items: [
                  {
                    name: 'New Business',
                    link: '/administration/company-management/business-unit/business-registration'

                  }
                ]
              },

              {
                name: 'Staff Management',
                link: '/administration/company-management/staff-management',
                items: [
                  {
                    name: 'Register Staff',
                    link: '/administration/company-management/staff-management/register-staff'
                  },
                  {
                    name: 'Search Staff',
                    link: '/administration/company-management/staff-management/search-staff'
                  },
                  {
                    name: 'Change Password',
                    link: '/administration/company-management/staff-management/change-password'
                  },
                  {
                    name: 'Manage Roles',
                    link: '/administration/company-management/staff-management/manage-roles'
                  },
                  {
                    name: 'Manage Teams',
                    link: '/administration/company-management/staff-management/manage-teams'
                  },
                  {
                    name: 'Manage Deparments',
                    link: '/administration/company-management/staff-management/manage-departments'
                  },
                  {
                    name: 'Manage Designation ',
                    link: '/administration/company-management/staff-management/manage-designation'
                  },
                  {
                    name: 'Others',
                    link: '/administration/company-management/staff-management/others'
                  }
                ]
              },
              {
                name: 'Supplier Credentials',
                items: [
                  {
                    name: 'Basic',
                    link: '/account/register-basic'
                  }
                ]
              }
            ]
          },
          {
            name: 'Content Management',
            link: '/administration/content-management',
            items: [
              {
                name: 'Air Booking Engine',
                link: '/administration/content-management/air-booking-engine',
                items: [
                  {
                    name: 'Manage Flight Destination',
                    link: '/administration/content-management/air-booking-engine/manage-flight-destination'
                  },
                  {
                    name: 'Airline Settings',
                    link: '/administration/content-management/air-booking-engine/airline-settings'
                  }
                ]
              },
              {
                name: 'Non Air Products',
                link: '/administration/content-management/non-air-products',
                items: [
                  {
                    name: 'Manage Hotel Chain Code',
                    link: '/administration/content-management/non-air-products/manage-hotel-chain-code'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Finance',
        icon: VpnKeyTwoToneIcon,
        link: '/finance',
        items: [
          {
            name: 'inventory',
            link: '/finace/inventory'
          },
          {
            name: 'Expenses',
            link: '/finace/inventory'
          },
          {
            name: 'Salaries',
            link: '/finace/inventory'
          }
        ]
      }
    ]
  },
  {
    heading: 'Admin Panels ',
    items: [
      {
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/accent-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: 'dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Expenses',
            link: 'dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
          },
          {
            name: 'Products',
            link: 'dashboards/products',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Statistics',
            link: 'dashboards/statistics',
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0'
          },
          {
            name: 'Automation',
            link: 'dashboards/automation'
          },
          {
            name: 'Analytics',
            link: 'dashboards/analytics'
          },
          {
            name: 'Banking',
            link: 'dashboards/banking'
          },
          {
            name: 'Commerce',
            link: 'dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: 'dashboards/crypto'
          },
          {
            name: 'Finance',
            link: 'dashboards/finance'
          },
          {
            name: 'Fitness',
            link: 'dashboards/fitness'
          },
          {
            name: 'Healthcare',
            link: '/accent-sidebar/dashboards/healthcare',
            items: [
              {
                name: 'Doctors',
                link: 'dashboards/healthcare/doctor'
              },
              {
                name: 'Hospital',
                link: 'dashboards/healthcare/hospital'
              }
            ]
          },
          {
            name: 'Helpdesk',
            link: 'dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: 'dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: 'dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: 'dashboards/tasks'
          }
        ]
      }
    ]
  }

];

export default menuItems;
