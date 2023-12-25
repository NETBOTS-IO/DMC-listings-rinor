import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import Driver from './driver/driver';
import Vehicle from './vehicle/vehicle';

const Index = () => {
  const [activeComponent, setActiveComponent] = useState('vehicle');

  const switchToVehicle = () => {
    setActiveComponent('vehicle');
  };

  const switchToDriver = () => {
    setActiveComponent('driver');
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '20px', width: '250px', height: '50px', fontSize: '1.5rem' }}
          onClick={switchToVehicle}
        >
          Add Vehicle
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ width: '250px', height: '50px', fontSize: '1.5rem' }}
          onClick={switchToDriver}
        >
          Add Driver
        </Button>
      </Box>

      {activeComponent === 'vehicle' && <Vehicle />}
      {activeComponent === 'driver' && <Driver />}
    </Container>
  );
};

export default Index;
