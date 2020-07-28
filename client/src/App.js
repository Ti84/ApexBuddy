import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing/Landing';
import useAppStyles from './useAppStyles';
import Layout from './components/layout/Layout';

function App() {
  const [platform, setPlatform] = useState('origin');
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const classes = useAppStyles();

  const handlePlayerSearch = async () => {
    try {
      const res = await fetch(`/players/${platform}/${playerName}`);
      const data = await res.json();
      setPlayerData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App" className={classes.app}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/">
              <Landing
                handlePlayerSearch={handlePlayerSearch}
                platform={platform}
                handlePlatformChange={setPlatform}
                playerName={playerName}
                handleNameChange={setPlayerName}
              />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
