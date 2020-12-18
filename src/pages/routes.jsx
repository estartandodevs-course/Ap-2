import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home/Home";
import { RegisterFirstStep } from "./RegisterFirstStep/RegisterFirstStep";
import { SearchProfile } from "./SearchProfile/SearchProfile";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { Chat } from "./Chat/Chat";
import { ViewFullProfile } from "./ViewFullProfile/ViewFullProfile";
import { onAuthStateChanged } from "../services/auth";

export function Routes() {
  const [user, setUser] = useState({ isLogged: false });

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return (
    <Switch>
      {user.isLogged ? (
        <>
          {/* <Route path="/register-second-step" component={RegisterSecondStep} />
      <Route path="/register-third-step" component={RegisterThirdStep} />
      <Route path="/register-fourth-step" component={RegisterFourthStep} /> */}
          <Route path="/" component={Home} exact />
          <Route path="/search-profile" component={SearchProfile} exact/>
          <Route path="/chat" component={Chat} exact/>
          <Route path="/profile" component={Profile} exact/>
          <Route path="/view-full-profile/:id" component={ViewFullProfile} exact/>
          <Redirect to="/" />
          {/* <Route path="*" component={() => <div>ERROR 404</div>} /> */}
        </>
      ) : (
        <>
         
          <Route path="/login" component={Login} exact/>
          <Redirect to="/login" />
          <Route path="/register" component={RegisterFirstStep} exact />
        
        </>
      )}
    </Switch>
  );
}
