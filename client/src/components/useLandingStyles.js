import { makeStyles } from '@material-ui/core';

const useLandingStyles = makeStyles((theme) => ({
  landing: {
    textAlign: 'center',
    marginTop: 150,
  },
  paper: {
    padding: '2px 4px',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 2,
    padding: 10,
    width: 200,
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      top: 55,
      left: -5,
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
    minWidth: 150
  },
  title: {
    marginBottom: 15
  },
  form: {
    display: 'flex',
    width: 500,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '90vw'
    }
  }
}));

export default useLandingStyles;
