import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/homePage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
    </Switch>
  );
};
