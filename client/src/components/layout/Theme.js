import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import useLegend, { ApexLegendContext } from './useLegend';

const useThemeStyles = makeStyles((theme) => {
  return {
    theme: {
      backgroundImage: (props) => `url(${props.imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: props => `center top ${props.backgroundTopOffset}`,
      boxShadow: `0px 0px 150px #274669 inset`,
      position: 'relative',
      zIndex: 0,
    },
    themeContainer: {
      '&::after': {
        backgroundColor: '#274669',
        content: `''`,
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.4,
        zIndex: -1,
      },
    },
  };
});

const Theme = ({ children }) => {
  const [apexLegendData, setApexLegend] = useLegend('wraith');
  const classes = useThemeStyles(apexLegendData);
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <ApexLegendContext.Provider value={{ apexLegendData, setApexLegend }}>
        <div className={classes.theme}>
          <div className={classes.themeContainer}>{children}</div>
        </div>
      </ApexLegendContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
