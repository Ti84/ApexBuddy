import React from 'react';
import useProfileStyles from '../profile/useProfileStyles';
import { Link, Card, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useErrorCardStyles = makeStyles((theme) => ({
  emoji: {
    fontSize: '50px',
    marginBottom: '15px'
  },
  retryLink: {
    fontSize: '20px'
  }
}));

const ErrorCard = ({ errorMsg }) => {
  const errorClasses = useErrorCardStyles();
  const profileClasses = useProfileStyles();
  return (
    <Card className={profileClasses.cardContainer}>
      <div className={profileClasses.spacerFifteen}>
        <span className={errorClasses.emoji} role="img" aria-label="Sad face">
          😥
        </span>
      </div>
      <div>
        <Typography variant="h5">{errorMsg}</Typography>
      </div>
      <div>
        <Link className={errorClasses.retryLink} component={RouterLink} to="/">
          Click here to try again
        </Link>
      </div>
    </Card>
  );
};

export default ErrorCard;
