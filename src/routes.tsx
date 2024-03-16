import { Route, Router, Switch } from "wouter";

import Home from "@/Home";
import Collections from "@/collections/Collections";
import Setup from "@/setup/Setup";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/setup" component={Setup} />
        <Route path="/collections" component={Collections} />
      </Switch>
    </Router>
  );
}
