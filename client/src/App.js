import React, { useState } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  const [platform, setPlatform] = useState('origin');
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [validationError, setValidationError] = useState('');

  const handlePlayerSearch = async (e) => {
    e.preventDefault();
    const regexCheck = /^[0-9a-zA-Z]+$/;

    if (validationError) {
      setValidationError('');
    }

    if (!playerName) {
      setValidationError('Username required.');
      return;
    } else if (playerName.length < 4 || playerName.length > 14) {
      setValidationError('Username must be between 4 - 14 characters.');
      return;
    } else if (!playerName.match(regexCheck)) {
      setValidationError('Player name can only contain letters or numbers.');
    }

    try {
      const res = await fetch(`/players/${platform}/${playerName}`);
      const data = await res.json();
      setPlayerData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNameChange = e => {
    var key = e.keyCode || e.charCode;

    if (key !== 8 && key !== 46 && e.target.value.length >= 16) {
      return;
    }

    setPlayerName(e.target.value);
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
              validationError={validationError}
              handleNameChange={handleNameChange}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
