import React from 'react';
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
  validationError,
}) => (
  <>
    <form onSubmit={handlePlayerSearch}>
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
        onChange={(e) => handleNameChange(e)}
        helperText={validationError}
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>

    {/* {JSON.stringify(playerData)} */}
  </>
);

export default Landing;
