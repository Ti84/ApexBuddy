import React, { useContext } from 'react';
import {
  Toolbar,
  Typography,
  makeStyles,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ApexLegendContext } from './useLegend';

const useAppNavStyles = makeStyles((theme) => {
  return {
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    color: '#513341',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 25
  },
  logo: {
    display: 'flex',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logoImage: {
    width: 35,
    marginRight: 5,
  },
}});
const AppNav = () => {
  const classes = useAppNavStyles();
  const { apexLegendData, setApexLegend } = useContext(ApexLegendContext);

  return (
    <Toolbar className={classes.toolbar}>
      <Link component={RouterLink} to="/" className={classes.logo}>
        <img src={logo} alt="site logo" className={classes.logoImage} />
        <Typography component="h1" variant="h6">Apex Buddy</Typography>
      </Link>
      {/* <Select
        value={apexLegendData.name || 'wraith'}
        onChange={(e) => setApexLegend(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={'bangalore'}>Bangalore</MenuItem>
        <MenuItem value={'bloodhound'}>Bloodhound</MenuItem>
        <MenuItem value={'caustic'}>Caustic</MenuItem>
        <MenuItem value={'crypto'}>Crypto</MenuItem>
        <MenuItem value={'gibraltar'}>Gibraltar</MenuItem>
        <MenuItem value={'lifeline'}>Lifeline</MenuItem>
        <MenuItem value={'loba'}>Loba</MenuItem>
        <MenuItem value={'mirage'}>Mirage</MenuItem>
        <MenuItem value={'octane'}>Octane</MenuItem>
        <MenuItem value={'pathfinder'}>Pathfinder</MenuItem>
        <MenuItem value={'revenant'}>Revenant</MenuItem>
        <MenuItem value={'wattson'}>Wattson</MenuItem>
        <MenuItem value={'wraith'}>Wraith</MenuItem>
      </Select> */}
    </Toolbar>
  );
};

export default AppNav;
