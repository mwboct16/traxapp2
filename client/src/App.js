// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import './App.css';
import Recognition from './pages/recognition';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/CheckIn" component={  CheckIn }/>
        <Route exact path="/SignUp" component={ SignUp } />
        <Route exact path="/SignUp2" component={ Recognition } />
      </Switch>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Books} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
