import './App.css';

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

export default function App(): JSX.Element {

  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const menuOpened: boolean = !!anchorElement;

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  }

  const closeMenu = (): void => {
    setAnchorElement(null);
  }

  return (
    <>
      <AppBar
        enableColorOnDark
        position="sticky"
      >
        <Toolbar>
          <IconButton
            aria-controls=""
            color="inherit"
            edge="start"
            id="menu-button"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            react-material-ui-sample
          </Typography>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorElement}
        MenuListProps={{ "aria-labelledby": "menu-button" }}
        open={menuOpened}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>
          <Link to="button-sample">Button sample</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to="checkbox-sample">Checkbox sample</Link>
        </MenuItem>
      </Menu>

      <Outlet />
    </>
  );

}
