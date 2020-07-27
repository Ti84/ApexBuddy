import { makeStyles } from '@material-ui/core';

const useLandingStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 150,
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 450,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: 10,
    width: 200,
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      top: 40,
      whiteSpace: 'nowrap',
    },
  },
  iconButton: {
    padding: 10,
    '&::after': {
      width: 1,
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      content: "''",
      height: 28,
      position: 'absolute',
      right: -5,
      display: 'block',
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    verticalAlign: 'unset',
  },
  select: {
    marginLeft: 12,
    flex: 1,
    padding: 10,
    width: 150
  },
  title: {
    marginBottom: 15
  }
}));

export default useLandingStyles;
