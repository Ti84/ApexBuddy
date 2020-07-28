import { makeStyles } from '@material-ui/core';

const useAppStyles = makeStyles((theme) => ({
  app: {
    overflow: 'auto',
    height: '100vh',
    background: `url('https://wallpapercave.com/wp/wp4573120.png') no-repeat 50% fixed`,
    boxShadow: `0px 0px 150px #274669 inset`,
    position: 'relative',
    zIndex: 0,
  },
  appContainer: {
    '&::after': {
      backgroundColor: '#274669',
      content: `''`,
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.4,
      zIndex: -1
    },
  }
}));

export default useAppStyles;
