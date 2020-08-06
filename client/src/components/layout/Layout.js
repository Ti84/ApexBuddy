import React from 'react';
import Theme from './Theme';
import AppNav from './AppNav';
import { makeStyles } from '@material-ui/core';

const useLayoutStyles = makeStyles(() => {
  return {
    layout: {
      textAlign: 'center',
      overflow: 'auto',
      height: 'calc(100vh - 60px)',
      paddingTop: 60
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
