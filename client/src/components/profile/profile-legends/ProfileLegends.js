import React from 'react';

const ProfileLegends = ({ profileData }) => {
  let legendsData = [];

  if (profileData && profileData.segments.length > 0) {
    legendsData = profileData.segments.filter(
      (segment) => segment.type === 'legend'
    );
  }

  console.log('legend data array', legendsData);

  return (
    <>
      {legendsData &&
        legendsData.length > 0 &&
        legendsData.map((legend) => (
          <div key={legend.metadata.name}>
            <div>{legend.metadata.name}</div>
            {legend.stats &&
              Object.keys(legend.stats).map((statKey) => (
                <div key={statKey}>
                  <div>{legend.stats[statKey].displayName}</div>
                  <div>{legend.stats[statKey].displayValue}</div>
                </div>
              ))}
          </div>
        ))}
    </>
  );
};

export default ProfileLegends;
