import { Box, Grid } from '@mui/material';
import { StyledAppbar, UpperAppbar, HeaderLink,StyledNavLink } from './Header.style';
//import moment from 'moment';
import moment from 'moment-timezone';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LinkItems = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/clients', name: 'Clients' },
  { to: '/contact', name: 'Contact' },
  { to: '/jobseekers', name: 'Jobseekers' },
  { to: '/services', name: 'Services' },
]

const styles = {
  container: {
    background: 'gray',
    height: '100px',
    display: 'flex',
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Vertically center the links
  },

};

const Header = () => {
  const [clock, setClock] = React.useState(() => moment().tz('America/New_York').format('MMMM Do YYYY, h:mm a z'));
  useEffect(() => {
    let intervalID = setInterval(() => {
      console.log('hello');
      setClock(moment().tz('America/New_York').format('MMMM Do YYYY, h:mm a z'))
    }, 60000
    );
    return () => clearInterval(intervalID);
  }
    , [])

  return (
    <>


      <StyledAppbar>
        <Box sx={{ background: 'blue' }}>  <Box sx={{ float: 'right' }}>{clock}</Box></Box>
        <Grid sx={{ background: 'gray', height: '100px', flexDirection: 'row', }} container >
          <Box>Company name </Box>

          {LinkItems.map((label, index) => (
            <Grid sx={{ color: 'white', m: 1 }} item key={index} md={1}>
              {/* <HeaderLink sx={styles.link} to={label.to} underline="hover">{label.name}</HeaderLink> */}



              <StyledNavLink
                to={label.to} 
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                {label.name}
              </StyledNavLink>

            </Grid>
          )
          )}
        </Grid>


        

      </StyledAppbar>
    </>
  )
}

export default Header