const { makeStyles } = require('@material-ui/core');

const useProfileStyles = makeStyles((theme) => ({
  offCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    marginTop: '30vh'
  },
  cardContainer: {
    display: 'inline-block',
    padding: '25px 15px',
    overflow: 'auto',
  },
  emoji: {
    fontSize: '50px',
    marginBottom: '15px'
  },
  spacerFifteen: {
    marginBottom: '15px'
  },
  retryLink: {
    fontSize: '20px'
  }
}));

export default useProfileStyles;
