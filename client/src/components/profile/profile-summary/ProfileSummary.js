import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileSummary = ({ profileData }) => {
  const [profileSummaryData, setProfileSummaryData] = useState(null);

  useEffect(() => {
    if (profileData && profileData.segments) {
      setProfileSummaryData(
        profileData.segments.find((segment) => segment.type === 'overview')
      );
    }
  }, [profileData]);

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
