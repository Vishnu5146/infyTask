import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { routes } from './Middleware/routes'




function App() {


  const route = routes.map((route, index) => {
    return (
      <Route key={index} path="/paginate" render={() => <route.main />} />
    );
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          {route}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
