import React from 'react';
import { Avatar, Card } from '@material-ui/core';

const ProfileCard = ({ profileData }) => {

  const {
    platformInfo: { avatarUrl, platformUserHandle, platformSlug },
  } = profileData;

  return (
    <Card>
      <Avatar alt="Origin Icon" src={avatarUrl} />
      <div className="profile-info">
        <span>{platformUserHandle}</span>
        <span>{platformSlug}</span>
      </div>
    </Card>
  );
};

export default ProfileCard;
