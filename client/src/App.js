import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './App.css';

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

    if((key !== 8 && key !== 46) && e.target.value.length >= 14) {
      return;
    }

    setPlayerName(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handlePlayerSearch}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Platform</FormLabel>
          <RadioGroup
            aria-label="platform"
            name="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <FormControlLabel value="origin" control={<Radio />} label="PC" />
            <FormControlLabel value="xbl" control={<Radio />} label="Xbox" />
            <FormControlLabel
              value="psn"
              control={<Radio />}
              label="Playstation"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          error={validationError ? true : false}
          id="standard-basic"
          variant="outlined"
          label="Player Name"
          value={playerName}
          onChange={(e) => handleNameChange(e)}
          helperText={validationError}
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>

      {JSON.stringify(playerData)}

    </div>
  );
}

export default App;
