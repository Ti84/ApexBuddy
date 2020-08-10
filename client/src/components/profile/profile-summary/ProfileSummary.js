import React from 'react';

const ProfileSummary = ({ profileData }) => {
  let profileSummaryData = null;
  if (profileData && profileData.segments) {
    profileSummaryData = profileData.segments.find((segment) => segment.type === 'overview');
  }

  console.log('overview data', profileSummaryData);

  return (
    <>
      {profileSummaryData && (
        <div>{profileSummaryData.stats.kills.displayValue}</div>
      )}
    </>
  );
};

export default ProfileSummary;
