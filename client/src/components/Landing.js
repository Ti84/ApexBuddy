import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useLandingStyles from './useLandingStyles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const Landing = ({
  handlePlayerSearch,
  platform,
  handlePlatformChange,
  handleNameChange,
  playerName,
}) => {
  const [validationError, setValidationError] = useState('');
  const classes = useLandingStyles();

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
    <section className={classes.landing}>
      <Typography variant="h3" component="h1" className={classes.title}>
        Apex Buddy
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={onPlayerSearch} className={classes.form}>
          <TextField
            className={classes.input}
            error={validationError ? true : false}
            placeholder="Player Name"
            value={playerName}
            onChange={(e) => onNameChange(e)}
            helperText={validationError}
            InputProps={{ disableUnderline: true }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            className={classes.iconButton}
          >
            <SearchIcon />
          </IconButton>
          <FormControl className={classes.formControl}>
            {' '}
            {/* className={classes.formControl} */}
            {/* <Label id="platform-label">Platform</Label> */}
            <Select
              labelId="platform-label"
              value={platform}
              onChange={(e) => handlePlatformChange(e.target.value)}
              className={classes.select}
              disableUnderline
            >
              <MenuItem value={'origin'}>Origin</MenuItem>
              <MenuItem value={'xbl'}>Xbox</MenuItem>
              <MenuItem value={'psn'}>Playstation</MenuItem>
            </Select>
          </FormControl>
        </form>

        {/* {JSON.stringify(playerData)} */}
      </Paper>
    </section>
  );
};

export default Landing;
