import { useState, useEffect, createContext } from 'react';

export const ApexLegendContext = createContext('wraith');

const useLegend = (name) => {
  const [apexLegend, setApexLegend] = useState(name);
  const [apexLegendData, setApexLegendData] = useState({});

  useEffect(() => {
    switch (apexLegend) {
      case 'wraith':
        setApexLegendData({
          name: 'wraith',
          imgUrl: 'https://wallpapercave.com/wp/wp4573120.png',
          theme: {},
        });
    }
  }, [apexLegend]);

  return [apexLegendData, setApexLegend];
};

export default useLegend;
