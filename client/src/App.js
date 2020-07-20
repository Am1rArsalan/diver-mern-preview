import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Setting from "./components/Setting";
import Contacts from "./components/Contacts";
import Home from "./components/TransActions";

export default function () {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/setting" exact component={Setting} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Layout>
  );
}
