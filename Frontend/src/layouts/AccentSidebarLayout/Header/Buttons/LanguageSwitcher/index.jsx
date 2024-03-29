import { useRef, useState } from 'react';

import {
  IconButton,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  ListItemText,
  Popover,
  Tooltip,
  styled
} from '@mui/material';
import Text from '../../../../../components/Text';

import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import internationalization from '../../../../../i18n/i18n';
import { useTranslation } from 'react-i18next';

import deFlag from '../../../../../assets/vite.svg';
import usFlag from '../../../../../assets/vite.svg';
import esFlag from '../../../../../assets/vite.svg';
import frFlag from '../../../../../assets/vite.svg';
import cnFlag from '../../../../../assets/vite.svg';
import aeFlag from '../../../../../assets/vite.svg';

const SectionHeading = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
        padding: ${theme.spacing(2, 2, 0)};
`
);

const ImageWrapper = styled('img')(
  () => `
        width: 30px;
        margin: 3px;
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
`
);

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const getLanguage = i18n.language;

  const switchLanguage = ({ lng }) => {
    internationalization.changeLanguage(lng);
  };
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Language Switcher')}>
        <IconButtonWrapper color="primary" ref={ref} onClick={handleOpen}>
          {getLanguage === 'de' && <ImageWrapper alt="German" src={deFlag} />}
          {getLanguage === 'en' && <ImageWrapper alt="English" src={usFlag} />}
          {getLanguage === 'en-US' && (
            <ImageWrapper alt="English" src={usFlag} />
          )}
          {getLanguage === 'en-GB' && (
            <ImageWrapper alt="English" src={usFlag} />
          )}
          {getLanguage === 'es' && <ImageWrapper alt="Spanish" src={esFlag} />}
          {getLanguage === 'fr' && <ImageWrapper alt="French" src={frFlag} />}
          {getLanguage === 'cn' && <ImageWrapper alt="Chinese" src={cnFlag} />}
          {getLanguage === 'ae' && <ImageWrapper alt="Arabic" src={aeFlag} />}
        </IconButtonWrapper>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box
          sx={{
            maxWidth: 240
          }}
        >
          <SectionHeading variant="body2" color="text.primary">
            {t('Language Switcher')}
          </SectionHeading>
          <List
            sx={{
              p: 2
            }}
            component="nav"
          >
            <ListItem
              className={
                getLanguage === 'en' || getLanguage === 'en-US' ? 'active' : ''
              }
              button
              onClick={() => {
                switchLanguage({ lng: 'en' });
                handleClose();
              }}
            >
              <ImageWrapper alt="English" src={usFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="English"
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'de' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'de' });
                handleClose();
              }}
            >
              <ImageWrapper alt="German" src={deFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="German"
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'es' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'es' });
                handleClose();
              }}
            >
              <ImageWrapper alt="Spanish" src={esFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="Spanish"
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'fr' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'fr' });
                handleClose();
              }}
            >
              <ImageWrapper alt="French" src={frFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="French"
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'cn' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'cn' });
                handleClose();
              }}
            >
              <ImageWrapper alt="Chinese" src={cnFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="Chinese"
              />
            </ListItem>
            <ListItem
              className={getLanguage === 'ae' ? 'active' : ''}
              button
              onClick={() => {
                switchLanguage({ lng: 'ae' });
                handleClose();
              }}
            >
              <ImageWrapper alt="Arabic" src={aeFlag} />
              <ListItemText
                sx={{
                  pl: 1
                }}
                primary="Arabic"
              />
            </ListItem>
          </List>
          <Divider />
          <Text color="warning">
            <Box
              p={2}
              sx={{
                maxWidth: 340
              }}
            >
              <WarningTwoToneIcon fontSize="small" />
              <Typography variant="body1">
                {t(
                  'We only translated a small part of the template, for demonstration purposes'
                )}
                !
              </Typography>
            </Box>
          </Text>
        </Box>
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
