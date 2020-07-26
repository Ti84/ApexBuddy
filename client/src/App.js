import React, { useState } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  const [platform, setPlatform] = useState('origin');
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);

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
    <div className="App">
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
    </div>
  );
}

export default App;
