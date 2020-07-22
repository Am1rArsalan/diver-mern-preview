import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputAdornment, FilledInput } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import useScrollPos from "./../../hooks/useScrollPos";

const useSearchBarStyles = makeStyles((theme) => ({
  root: {
    width: 288,
    height: 24,
    borderRadius: 5,
    width: "100%",
    padding: 4,
  },
  searchBarInp: {
    background: "#E7E7E7",
  },
  inp: {
    position: "relative",
    top: -7,
  },
  scrollMargin: {
    position: "absolute",
    marginTop:78 ,
    marginLeft: '-140px' ,
    left: '50%'
  },
}));

export default function () {
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
