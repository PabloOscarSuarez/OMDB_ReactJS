import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "../NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/index";
import Register from "../User/Register";
import Login from "../User/Login";
import MovieList from "../MovieList/";
import NotFound from "../NoFound";
import MovieInfo from "../MovieInfo";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/movies/:id" component={MovieInfo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;