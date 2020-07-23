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

  const handlePlayerSearch = async (e) => {
    e.preventDefault();
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
          id="standard-basic"
          label="Standard"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
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
