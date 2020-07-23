import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Setting from "./components/Setting";
import Contacts from "./components/Contacts";
import Home from "./components/TransActions";
import { useDispatch } from "react-redux";
import {  getUserData , authenticate  } from './store/action';


export default function () {
  const dispatch = useDispatch() ;
  useEffect(() => {
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
