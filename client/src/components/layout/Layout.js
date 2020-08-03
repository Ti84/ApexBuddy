import React from 'react';
import Theme from './Theme';
import AppNav from './AppNav';
import { makeStyles } from '@material-ui/core';

const useLayoutStyles = makeStyles(() => {
  return {
    layout: {
      textAlign: 'center',
      overflow: 'auto',
      height: '100vh',
    },
  };
});

const Layout = ({ children }) => {
  const classes = useLayoutStyles();
  return (
    <Theme>
      <AppNav />
      <main className={classes.layout}>{children}</main>
    </Theme>
  );
};

export default Layout;
