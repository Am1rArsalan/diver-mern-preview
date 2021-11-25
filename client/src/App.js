import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Setting from "./containers/Setting";
import Contacts from "./containers/Contacts";
import Home from "./containers/TransActions";
import { useDispatch } from "react-redux";
import { getUserData, authenticate } from "./store/action";
import appTheme from "./components/UI/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router, Location } from "@reach/router";
import ProfileSetting from "./containers/ProfileSetting";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function AdvanceSetting() {
  return <span> advance Setting </span>;
}

const FadeTransitionRouter = (props) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
    dispatch(getUserData());
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <FadeTransitionRouter>
          <Home path="/" />
          <Setting path="setting">
            <ProfileSetting path="profile" />
            <AdvanceSetting path="advanceSetting" />
          </Setting>
          <Contacts path="/contacts" />
        </FadeTransitionRouter>
      </Layout>
    </ThemeProvider>
  );
}
