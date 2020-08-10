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
  spacerFifteen: {
    marginBottom: '15px'
  }
}));

export default useProfileStyles;
