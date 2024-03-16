// components/Footer.js
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Powered by '}
          <a href="https://nextjs.org/">Next.js</a>
          {' and '}
          <a href="https://mui.com/">Material-UI</a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
