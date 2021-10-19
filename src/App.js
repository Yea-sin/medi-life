import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Departments from "./Pages/Department/Departments/Departments";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound/NotFound";
import Footer from "./Pages/Shared/Foofter/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/departments">
            <Departments />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
