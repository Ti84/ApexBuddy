import React, { useEffect, useState } from 'react';
import useProfileStyles from './useProfileStyles';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
} from '@material-ui/core';
import ProfileCard from './profilecard/ProfileCard';
import ErrorCard from '../error-card/ErrorCard';
import ProfileSummary from './profile-summary/ProfileSummary';
import ProfileLegends from './profile-legends/ProfileLegends';

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
        const resData = await res.json();
        if (resData && resData.errors) {
          setErrorMsg(resData.errors[0].message);
        } else if (resData && resData.data) {
          setProfileData(resData.data);
        }
        setLoading(false);
      } catch (e) {
        console.error(e);
        setErrorMsg('Something bad happened :C, please try your search again.');
        setLoading(false);
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
      {!loading && errorMsg && (
        <section className={classes.offCenter}>
          <ErrorCard errorMsg={errorMsg} />
        </section>
      )}
      {!loading && profileData && (
        <section>
          {/* TODO: Refactor to set this data when fetching in profile useEffect to avoid extra render on init of these components */}
          <ProfileCard profileData={profileData} />
          <ProfileSummary profileData={profileData} />
          <ProfileLegends profileData={profileData} />
        </section>
      )}
    </>
  );
};

export default Profile;
