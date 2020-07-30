import React from 'react';
import Theme from './Theme';
import AppNav from './AppNav';

const Layout = ({ children }) => {
  return (
    <Theme>
      <AppNav />
      <main>{children}</main>
    </Theme>
  );
};

export default Layout;
