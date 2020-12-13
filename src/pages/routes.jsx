import React from "react";
import { Switch, Route } from "react-router-dom";
import { RegisterFourthStep } from "./RegisterFourthStep/RegisterFourthStep";
import { Home } from "./Home/Home";
import { RegisterFirstStep } from "./RegisterFirstStep/RegisterFirstStep";
import { RegisterSecondStep } from "./RegisterSecondStep/RegisterSecondStep";
import { RegisterThirdStep } from "./RegisterThirdStep/RegisterThirdStep";
import { SearchProfile } from "./SearchProfile/SearchProfile";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { Chat } from "./Chat/Chat";
import { ViewFullProfile } from "./ViewFullProfile/ViewFullProfile";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={RegisterFirstStep} exact />
      <Route path="/register-second-step" component={RegisterSecondStep} />
      <Route path="/register-third-step" component={RegisterThirdStep} />
      <Route path="/register-fourth-step" component={RegisterFourthStep} />
      <Route path="/home" component={Home} />
      <Route path="/search-profile" component={SearchProfile} />
      <Route path="/chat" component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/view-full-profile" component={ViewFullProfile} />
      <Route component={() => <div>ERROR 404</div>} />
    </Switch>
  );
}
