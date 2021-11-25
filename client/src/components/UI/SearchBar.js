import React, { useState } from "react";
import { Grid, InputAdornment, FilledInput } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import useScrollPos from "./../../hooks/useScrollPos";
import useSearchBarStyles from "./styles/SearchBarStyles";

export default function SearchBar() {
  const classes = useSearchBarStyles();
  const [value, setVal] = useState();
  const scrollPos = useScrollPos();

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      className={scrollPos !== 0 ? classes.scrollMargin : null}
      style={{ height: 32, textAlign: "center" }}
    >
      <Grid className={classes.root}>
        <FilledInput
          style={{ height: 24, fontSize: 9, width: 283 }}
          placeholder="جستجو"
          id="filled-adornment-weight"
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <FaSearch />{" "}
            </InputAdornment>
          }
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          classes={{ input: classes.inp }}
        />
      </Grid>
    </Grid>
  );
}
