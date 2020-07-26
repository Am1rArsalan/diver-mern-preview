import React, { useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useSharedStyles from "../components/UI/useShareStyles";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";

const useProfileSettingStyles = makeStyles(
  (theme) => ({
    myClass: {
      "& label": {
        //right: "-20rem" ,
        top: 11,
        fontSize: 14,
        textAlign: "right",
        width: "19rem",
      },
      "& input": {
          fontSize: 14
      },
    },
  }),
  { index: 1 }
);

function ProfileSetting() {
  const classes = useProfileSettingStyles();
  const state = useSelector((state) => state.user);

  const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    value,
    ...custom
  }) => (
    <TextField
      label={label}
      //placeholder={placeholder}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      classes={{
        root: classes.myClass,
      }}
      value={value}
    />
  );

  if (!state.user) return "Loading User Data ";
  return (
    <Grid container direction="coumn" justify="center">
      {/*   will be change with redux form */}
      <Grid item xs={12}>
        <Field
          value={state.user.data.name}
          name="name"
          component={renderTextField}
          type="text"
          label="نام"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-number"
          label="شماره تماس "
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          classes={{
            root: classes.myClass,
          }}
          value={state.user.data.phone}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-number"
          label="نام کاربری "
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          classes={{
            root: classes.myClass,
          }}
          value={state.user.data.username}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-number"
          label="درباره"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          classes={{
            root: classes.myClass,
          }}
          value={state.user.data.about}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-number"
          label="ایمیل"
          type="text"
          InputLabelProps={{
            shrink: true,
            readOnly: true,
          }}
          classes={{
            root: classes.myClass,
          }}
          value={state.user.data.email}
        />
      </Grid>
    </Grid>
  );
}

export default reduxForm({
  form: "profileForm",
})(ProfileSetting);
