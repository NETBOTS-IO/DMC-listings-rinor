export const formDefaultValues = {
  adultFare: 10000,
  airline: 'PIA',
  cabin: 'Economy',
  childFare: 1000,
  code: '1000',
  destination: 'Islamabad',
  discount: 2,
  gender: 'male',
  infantFare: 100,
  issueBy: 'test',
  journeyDate: '12/12/12',
  ledger: 'idk',
  origin: 'Skardu',
  passengers: {
    cabin: 'economy',
    numberOfAdults: 1,
    numberOfChildren: 1,
    numberOfInfants: 1,
    adults: [
      {
        dateOfBirth: '2022-11-28',
        email: 'alimuhammad4lala@gmail.com',
        firstName: 'Alfred',
        phoneNumber: '+923060688855',
        surname: 'Jamil',
        ticketNumber: '1234567890'
      }
    ],
    children: [
      {
        dateOfBirth: '2022-11-28',
        email: 'alimuhammad4lala@gmail.com',
        firstName: 'Alfred',
        phoneNumber: '+923060688855',
        surname: 'Jamil',
        ticketNumber: '1234567890'
      }
    ],
    infants: [
      {
        dateOfBirth: '2022-11-28',
        firstName: 'Alfred',
        surname: 'Jamil',
        ticketNumber: '1234567890'
      }
    ]
  },
  pnrNumber: '1234',
  returnDate: '10/10/10',
  salesCommission: 10,
  taxes: 10,
  ticket: 398475938,
  tickets: { 0: {}, defaultTicket: {} },
  totalTickets: 1,
  trip: 'multiCityTrip'
};
