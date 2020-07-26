import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Landing = ({
  handlePlayerSearch,
  platform,
  handlePlatformChange,
  handleNameChange,
  playerName,
}) => {
  const [validationError, setValidationError] = useState('');

  const playerSearchValidation = () => {
    const regexCheck = /^[0-9a-zA-Z]+$/;

    if (validationError) {
      setValidationError('');
    }

    if (!playerName) {
      setValidationError('Username required.');
      return true;
    } else if (playerName.length < 4 || playerName.length > 14) {
      setValidationError('Username must be between 4 - 14 characters.');
      return true;
    } else if (!playerName.match(regexCheck)) {
      setValidationError('Player name can only contain letters or numbers.');
      return true;
    }
    return false;
  };

  const onPlayerSearch = (e) => {
    e.preventDefault();
    if (playerSearchValidation()) {
      return;
    }
    handlePlayerSearch();
  };

  const onNameChange = (e) => {
    var key = e.keyCode || e.charCode;

    if (key !== 8 && key !== 46 && e.target.value.length >= 16) {
      return;
    }

    handleNameChange(e.target.value);
  };

  return (
    <>
      <form onSubmit={onPlayerSearch}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Platform</FormLabel>
          <RadioGroup
            aria-label="platform"
            name="platform"
            value={platform}
            onChange={(e) => handlePlatformChange(e.target.value)}
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
          onChange={(e) => onNameChange(e)}
          helperText={validationError}
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>

      {/* {JSON.stringify(playerData)} */}
    </>
  );
};

export default Landing;
