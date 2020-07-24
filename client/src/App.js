import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Setting from "./containers/Setting";
import Contacts from "./containers/Contacts";
import Home from "./containers/TransActions";
import { useDispatch } from "react-redux";
import {  getUserData , authenticate  } from './store/action';


export default function () {
  const dispatch = useDispatch() ;
  useEffect(() => {
     //will be change after implementing authentication in the frontEnd
     dispatch(authenticate())
     dispatch(getUserData())
  }, []);

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
