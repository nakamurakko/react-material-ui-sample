import './App.css';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export default function App(): JSX.Element {

  return (
    <AppBar
      enableColorOnDark
      position="sticky"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography>
          react-material-ui-sample
        </Typography>
      </Toolbar>
    </AppBar>
  );

}
