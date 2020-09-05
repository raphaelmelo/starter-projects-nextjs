import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#289944', 
    },
    secondary: {
      main: 'rgba(0,0,0,0.7)', 
    },
    background: {
      default: '#fdfefd'
    }
  }
});

export default theme;
