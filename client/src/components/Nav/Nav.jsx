import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Badge, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import HistoryIcon from '@mui/icons-material/History';
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
    <AppBar
      className={style.nav}
      position="sticky">
      <Container>
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
              {/* мобильная навигация  */}
              <MenuItem onClick={handleCloseNavMenu} >
                <Link to="/categories"
                  className={style.link}>
                  <Typography textAlign="center">
                    <RestaurantMenuIcon style={{ color: '#6868ac', marginRight: '10px' }}></RestaurantMenuIcon>
                    Меню
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/orders"
                  className={style.link}>
                  <Typography textAlign="center">
                    <HistoryIcon style={{ color: '#6868ac', marginRight: '10px' }}></HistoryIcon>
                    Мои заказы
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
              className={style.link_header}>RestoRunner</Link>
          </Typography>
          {/* web навигация  */}
          <Box className={style.link_header} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ justifyContent: 'center' }}>

            <MenuItem onClick={handleCloseNavMenu} className={style.link_header}>
              <Link to="/categories" className={style.link_header} >
                <Typography textAlign="center" className={style.link_header}>
                  Меню
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}
              className={style.link_header}>
              <Link to="/orders" className={style.link_header}>
                <Typography textAlign="center" className={style.link_header}>
                  Мои заказы
                </Typography>
              </Link>
            </MenuItem>
          </Box>

          {/* Корзина  */}
          <Box sx={{ flexGrow: 0 }}>
      
              <Link to="/cart" underline="none">
                <IconButton sx={{ 
                  p: 1,
                bgcolor: "white" 
              }}
                aria-label="cart">
                    <StyledBadge badgeContent={totalQuantity} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
              </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

