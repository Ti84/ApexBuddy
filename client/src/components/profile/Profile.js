import React, { useEffect, useState } from 'react';
import useProfileStyles from './useProfileStyles';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { CircularProgress, Card, Typography, Link } from '@material-ui/core';
import ProfileCard from './profilecard/ProfileCard';

const Profile = () => {
  const classes = useProfileStyles();
  const { platform, playerName } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const loadPlayerData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/players/${platform.toLowerCase()}/${playerName}`
        );
        const data = await res.json();
        if (data && data.errors) {
          setErrorMsg(data.errors[0].message);
        } else if (data) {
          setProfileData(data);
        }
        setLoading(false);
      } catch (e) {
        console.error(e);
        setErrorMsg('Something bad happened :C, please try your search again.');
      }
    };
    loadPlayerData();
  }, [platform, playerName]);

  return (
    <>
      {loading && (
        <section className={classes.offCenter}>
          <CircularProgress />
        </section>
      )}
      {!loading && profileData && (
        <section>
          <ProfileCard profileData={profileData && profileData.data} />
      </section>
      )}
      {!loading && errorMsg && (
        <section className={classes.offCenter}>
          <Card className={classes.cardContainer}>
            <div className={classes.spacerFifteen}>
              <span className={classes.emoji} role="img" aria-label="Sad face">
                😥
              </span>
            </div>
            <div>
              <Typography variant="h5">{errorMsg}</Typography>
            </div>
            <div>
              <Link className={classes.retryLink} component={RouterLink} to="/">
                Click here to try again
              </Link>
            </div>
          </Card>
        </section>
      )}
    </>
  );
};

export default Profile;
