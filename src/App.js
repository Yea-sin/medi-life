import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Departments from "./Pages/Department/Departments/Departments";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound/NotFound";
import Footer from "./Pages/Shared/Foofter/Footer";
import Header from "./Pages/Shared/Header/Header";
import Details from "./Pages/ShowDetails/Details/Details";
import SingIn from "./Pages/SingIn/SingIn/SingIn";
import SingUp from "./Pages/SingUp/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/departments">
              <Departments />
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceId">
              <Details />
            </PrivateRoute>
            <Route path="/singIn">
              <SingIn />
            </Route>
            <Route path="/singUp">
              <SingUp />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
