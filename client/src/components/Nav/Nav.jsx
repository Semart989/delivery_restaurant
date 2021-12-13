import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Tooltip, Badge, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from '../Nav/Nav.module.css'

const ResponsiveAppBar = () => {

  // получение количесвта товаров по ключу quantity в объекте каждого блюда 
  // из корзины клиента для изменения бэйджа
  const totalCart = useSelector((state) => state.cart.cart);
  const totalQuantity = totalCart.reduce((a, b) => a + b.quantity, 0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'white' } }}>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/categories"
                  className={style.link}>
                  <Typography textAlign="center">
                    Меню
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/orders"
                  className={style.link}>
                  <Typography textAlign="center">
                    Мои заказы
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="#"
                  className={style.link}>
                  <Typography textAlign="center">
                    Позвонить
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/"
              className={style.link_header}>Delivery Restraunt</Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/categories"
                className={style.link_header}>
                <Typography textAlign="center">
                  Меню
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/orders"
                className={style.link_header}>
                <Typography textAlign="center">
                  Мои заказы
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="#"
                className={style.link_header}>
                <Typography textAlign="center">
                  Позвонить
                </Typography>
              </Link>
            </MenuItem>
          </Box>

          {/* Корзина  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Link to="/cart" underline="none">
                <IconButton sx={{ p: 0 }}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={totalQuantity} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

