import React, { useEffect, useState } from 'react';
import useProfileStyles from './useProfileStyles';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const classes = useProfileStyles();
  const { platform, playerName } = useParams();
  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    const loadPlayerData = async () => {
      try {
        const res = await fetch(
          `/players/${platform.toLowerCase()}/${playerName}`
        );
        const data = await res.json();
        setProfileData(data);
      } catch (e) {
        console.error(e);
      }
    };
    loadPlayerData();
  }, [platform, playerName]);

  return (
    <>
      <section className="profile-card">{JSON.stringify(profileData)}</section>
    </>
  );
};

export default Profile;
