import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Setting from "./containers/Setting";
import Contacts from "./containers/Contacts";
import Home from "./containers/TransActions";
import { useDispatch } from "react-redux";
import { getUserData, authenticate } from "./store/action";
import apptheme from "./components/UI/theme";

import {
    ThemeProvider
} from "@material-ui/core/styles";

export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    //will be change after implementing authentication in the frontEnd
    dispatch(authenticate());
    dispatch(getUserData());
  }, []);

  return (
        <ThemeProvider theme={apptheme}>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/setting" component={Setting} />
              <Route exact path="/contacts" component={Contacts} />
            </Switch>
          </Layout>
        </ThemeProvider>
  );
}
