import React from 'react';
import { makeStyles } from '@material-ui/core';

const useBackgroundImageStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    boxShadow: `0px 0px 7px #eb3136 inset`
  },
  heroImg: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  }
}));

const BackgroundImage = ({ imgUrl }) => {
  const classes = useBackgroundImageStyles();
  
  return <div className={classes.root}><img className={classes.heroImg} src={imgUrl} alt="background decoration" /></div>
};

export default BackgroundImage;
