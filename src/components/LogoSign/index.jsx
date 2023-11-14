import {
  Box,
  Tooltip,
  Badge,
  tooltipClasses,
  styled,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from "../../assets/icons/Rinor_text_logo.png"
import { maxWidth } from '@mui/system';
import { auto } from '@popperjs/core';
import image1 from "../../assets/icons/favicon-32x32.png"

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
`
);


const TooltipWrapper = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function Logo() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TooltipWrapper title={t('RINOR Management System')} arrow>
      <LogoWrapper to="/overview">

        <img src={image1} alt='Logo' width={100} height={38} sx={{ mr: 2 }} />

      </LogoWrapper>
    </TooltipWrapper>

  );
}

export default Logo;
