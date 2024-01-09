import React, { useState } from 'react';
import { Button, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import Driver from './driver/driver';
import Vehicle from './vehicle/vehicle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Index = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const switchToVehicle = () => {
    setActiveComponent('vehicle');
  };

  const switchToDriver = () => {
    setActiveComponent('driver');
  };
  const CardIcon = ({ component }) => {
    return component === 'vehicle' ? <DirectionsCarIcon fontSize="large" /> : <PersonAddIcon fontSize="large" />;
  };
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '50px' }}>
        {activeComponent === null && (
          <>
            <Grid item xs={12} md={6}>
              <Card
                variant="outlined"
                style={{
                  height: '400px',
                  cursor: 'pointer',
                  backgroundColor: '#2196f3',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={switchToVehicle}
              >
                <CardContent
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardIcon component="vehicle" />
                  <Typography variant="h5" component="div" sx={{ ml: 1 }}>
                    Add Vehicle
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                variant="outlined"
                style={{
                  height: '400px',
                  cursor: 'pointer',
                  backgroundColor: '#2196f3',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={switchToDriver}
              >
                <CardContent
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardIcon component="driver" />
                  <Typography variant="h5" component="div" sx={{ ml: 1 }}>
                    Add Driver
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {activeComponent === 'vehicle' && <Vehicle />}
        {activeComponent === 'driver' && <Driver />}
      </Grid>
    </Container >
  );
};

export default Index;
