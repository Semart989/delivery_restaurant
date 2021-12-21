import React, { useEffect, useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import allDishesAT from '../../redux/actionTypes/allDishesAT'
import { useHistory } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  backgroundColor: '',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const dispatch = useDispatch()
  const input = useRef()
  const history = useHistory()

  const handleClick = () => {
    dispatch({ type: allDishesAT.INIT_SEARCH, payload: input.current.value })
    history.push('/search')
  }

  useEffect(
    () => {
      fetch('/search')
        .then((response) => response.json())
        .then(data => dispatch({ type: allDishesAT.GET_ALL_DISHES, payload: data }))
    }, [dispatch]
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <Search>
              <SearchIcon onClick={() => handleClick()} />
              <StyledInputBase
                inputRef={input}
                placeholder="Найти..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
