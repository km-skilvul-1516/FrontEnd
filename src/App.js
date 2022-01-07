import Login from "./component/auth/Login";
import Home from "./component/base/Home";
import Admin from "./component/admin/Admin";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profil" component={Home} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
