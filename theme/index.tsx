import { createMuiTheme } from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";
// import { green } from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        type:'light',
      primary: {
        main: '#C2185B',
      },
      secondary: {
        main: '#1565C0', 
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });