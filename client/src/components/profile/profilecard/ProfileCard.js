import React from 'react';
import { Card } from '@material-ui/core';

const ProfileCard = ({
  profileData: {
    platformInfo: { platformSlug, platformUserHandle, avatarUrl },
  },
}) => {
  console.log(platformSlug);
  return (
    <Card>
      <div>
        <img src={avatarUrl} alt="User Profile" />
      </div>
      <div>
        {platformSlug}
        {platformUserHandle}
      </div>
    </Card>
  );
};

export default ProfileCard;
