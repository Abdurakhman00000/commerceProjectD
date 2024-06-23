import React, { useState } from 'react';
import BikeLogo from '../image/bike logo.png';
// import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import AdminPanel from '../admin/AdminPanel';
import { IconButton, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth } from '../../context/AuthContext';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useCard } from '../../context/CardContext';
import { ADMIN } from '../../helpers/const';


const Header = () => {
    const navigate = useNavigate();
    const { user, logOutUser } = useAuth();
    const { card } = useCard();


    const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(user);


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

    return (
        <header id='header'>
             <div className="container">
                <header className="header">
                   
                    <div className="header-logo">
                        <Link to='/home'>
                        <img src={BikeLogo} alt="" />
                        </Link>
                    </div>

                    <div className="nav-links">
                        <p>О НАС</p>
                        <p>ВЕЛОСИПЕДЫ</p>
                        <Link to='/list'> <p>ПОКУПКА</p></Link>
                        <p>БЛОГ</p>
                        <p>КОНТАКТЫ</p>
                    </div>


                    <div className="active-log">

                    <div>

                        {
                            user ? (
                                <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="white"
                              >
                                <Tooltip title = {user.displayName}>
                                    <Avatar alt={user.displayName} src={user.photoURL} />
                                </Tooltip>
                                </IconButton>
                            ) : (
                                <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="white"
                              >
                                <AccountCircle sx={{color: 'white', fontSize: '30px'}}/>
                              </IconButton>
                            )
                        }
              
              {
                user ? (
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => logOutUser()}>Sign out</MenuItem>
              </Menu>
                ) : (
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {handleClose(); navigate('/signUp')}}>Sign up</MenuItem>
                <MenuItem onClick={() => {handleClose(); navigate('/signIn')}}>Sign in</MenuItem>
              </Menu>
                )
              }
            </div>

                        <div className="shopCardButton">
                        <StyledBadge badgeContent={card.products.length} color="secondary">
                        <Link to='/card'><ShoppingCartIcon sx={{color: 'white', fontSize: '30px', cursor: 'pointer'}}/></Link>
                        </StyledBadge>
                        </div>

                        {
                          user ? (
                            ADMIN.map((el) => user.email === el.email  ? (
                              <div className="adminPanel">
                          <AdminPanel/>
                          </div>
                            ) : (""))
                          ) : null
                        }

                        <div className="menuIcon">
                          <Link to='/menuPage'> <MenuIcon sx={{color: 'white', fontSize: '30px'}}/></Link>
                        </div>
                    </div>
                </header>
            </div>
        </header>
    );
};

export default Header;