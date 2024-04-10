import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

/**
 * Home コンポーネント。
 * @returns
 */
export default function Home(): JSX.Element {
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
