import { useState, useEffect, createContext } from 'react';

export const ApexLegendContext = createContext('wraith');

const useLegend = (name) => {
  const [apexLegend, setApexLegend] = useState(name);
  const [apexLegendData, setApexLegendData] = useState({});

  useEffect(() => {
    switch (apexLegend) {
      case 'bangalore':
        setApexLegendData({
          name: 'bangalore',
          imgUrl: 'https://i.redd.it/xwlfy8208dh21.png',
          backgroundTopOffset: '0',
          theme: {},
        });
        break;
      case 'bloodhound':
        setApexLegendData({
          name: 'bloodhound',
          imgUrl: 'https://images.alphacoders.com/989/thumb-1920-989913.png',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'caustic':
        setApexLegendData({
          name: 'caustic',
          imgUrl: 'https://wallpapercave.com/wp/wp4578108.jpg',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'crypto':
        setApexLegendData({
          name: 'crypto',
          imgUrl:
            'https://image5.uhdpaper.com/wallpaper-hd/apex-legends-crypto-uhdpaper.com-hd-5.1101.jpg',
            backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'gibraltar':
        setApexLegendData({
          name: 'gibraltar',
          imgUrl:
            'https://i.pinimg.com/originals/df/bd/6c/dfbd6cade407bcf9054220c77b667749.jpg',
            backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'lifeline':
        setApexLegendData({
          name: 'lifeline',
          imgUrl: 'https://wallpapercave.com/wp/wp5035870.png',
          backgroundTopOffset: '0',
          theme: {},
        });
        break;
      case 'loba':
        setApexLegendData({
          name: 'loba',
          imgUrl:
            'https://image3.uhdpaper.com/wallpaper-hd/loba-apex-legends-art-uhdpaper.com-hd-3.1893.jpg',
            backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'mirage':
        setApexLegendData({
          name: 'mirage',
          imgUrl:
            'https://cdna.artstation.com/p/assets/images/images/016/214/252/large/ellyan-theodoro-mirage.jpg?1551336097',
            backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'octane':
        setApexLegendData({
          name: 'octane',
          imgUrl: 'https://wallpapercave.com/wp/wp4636586.jpg',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'pathfinder':
        setApexLegendData({
          name: 'pathfinder',
          imgUrl: 'https://wallpapers.gry-online.pl/pliki/70763/1920x1080.jpg',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'revenant':
        setApexLegendData({
          name: 'revenant',
          imgUrl: 'https://wallpapercave.com/wp/wp5505586.jpg',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      case 'wattson':
        setApexLegendData({
          name: 'wattson',
          imgUrl: 'https://wallpapercave.com/wp/wp4720540.jpg',
          backgroundTopOffset: '50px',
          theme: {},
        });
        break;
      default:
        setApexLegendData({
          name: 'wraith',
          imgUrl: 'https://wallpapercave.com/wp/wp4573120.png',
          backgroundTopOffset: '0',
          theme: {},
        });
    }
  }, [apexLegend]);

  return [apexLegendData, setApexLegend];
};

export default useLegend;
