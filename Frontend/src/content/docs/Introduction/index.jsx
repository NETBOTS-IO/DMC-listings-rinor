import { Container, Grid, Typography } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeaderDocs';

function Introduction() {
  return (
    <>
      <Helmet>
        <title>Introduction - RINOR Management System</title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Introduction" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Welcome
            </Typography>
            <Typography paragraph>
              RINOR Management System includes multiple pages that can be used
              to give you a head start when starting you start developing a web
              app.
            </Typography>
            <Typography paragraph>
              We've built this template with performance in mind, so all pages
              will get a 96 or more score on Google Lighthouse performance
              testing. You can inspect the template performance by opening the
              Google Chrome Inspector and moving to the last tab named
              "Lighthouse". On that tab click on "Generate report".
            </Typography>
            <Typography paragraph>
              We designed multiple color schemes that can be switched from the
              Settings button in the live preview screen corner.
            </Typography>
            <Typography paragraph>
              The documentation includes basic examples on how to work with the
              template or how to remove certain parts that you will not be using
              in your production application.
            </Typography>
            <Typography paragraph>
              RINOR Management System is based on <code>Create React App</code>{' '}
              from Facebook. If required, you can use the eject command to eject
              the project instance. Read more about ejecting here:
              https://create-react-app.dev/docs/available-scripts/#npm-run-eject
            </Typography>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Feedback
            </Typography>
            <Typography paragraph>
              We try to constantly improve all our products. Any feedback or
              suggestions you might have will help us a lot in developing the
              next release. If you have any suggestions, bugs report or issue,
              you can open a ticket by sending an email to
              <code>support@bloomui.freshdesk.com</code>
            </Typography>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Custom Pages
            </Typography>
            <Typography paragraph>
              Based on our experience in developing applications user interfaces
              we chose popular niche areas for the dashboard pages, applications
              and management sections. We understand that these might not be
              enough for your app's needs. That's why we are offering to build
              custom pages based on your needs, if we feel that your requested
              page design might benefit multiple customers or if they aren't too
              specific to a particular products niche.
            </Typography>
            <Typography paragraph>
              All you have to do is email us at{' '}
              <code>support@bloomui.freshdesk.com</code>
              with a wireframe, prototype or design for the requested pages.
              After our initial review, we will contact you and let you know if
              we'll be integrating your custom page in Rinor ERP React Admin
              Dashboard.
            </Typography>
            <Typography paragraph>
              Please note that we reserve the right to reject any or all custom
              page requests that are made for free custom pages.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Introduction;
