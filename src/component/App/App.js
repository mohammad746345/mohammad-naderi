import React, {useEffect} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';

import Layout from "../Layout/Layout";
import Blog from "../Blog/Blog";
import Law from "../Law/Law";
import CategoryItem from "../CategoryItem/CategoryItem";
import SignUp from "../SignUp/baseSignUp"
import SignUp2 from "../SignUp/baseSignUp2";
import Login from "../Login/baseLogin";
import Login2 from "../Login/baseLogin2";
import Support from "../Support/baseSupport";
// import PrivateRoute from "../RouteManager/PrivateRoute"
import Home from "../Home/Home";
import Course from "../Course/Course";
import AllCourses from "../AllCourses/baseAllCourses";
import AboutUs from "../AboutUs/baseAboutUs";
import  { BreakpointProvider } from 'react-socks';
import PrivateRoute from "../RouteManager/PrivateRoute";
import Authentication from "../Authentication/Authentication";

function App() {
  return (
      <BrowserRouter>
          <BreakpointProvider>
              <Layout>
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route exact path="/Support">
                          <Support />
                      </Route>
                      <Route exact path="/AboutUs">
                          <AboutUs />
                      </Route>
                      <Route exact path="/AllCourses">
                          <AllCourses />
                      </Route>
                      <Route exact path="/course/:slug">
                            <Course />
                      </Route>
                      <Route path="/wiki">
                          <Blog />
                      </Route>
                      <Route exact path="/login">
                          <Login />
                      </Route>

                      <PrivateRoute exact path="/login2"
                        component={Login2}
                        statusChecker={() => localStorage.getItem('Login_status')} />

                      <Route exact path="/signUp">
                          <SignUp />
                      </Route>

                      <PrivateRoute exact path="/SignUp2"
                        component={SignUp2}
                        statusChecker={() => localStorage.getItem('SignUp_status')} />

                      <Route path="/contact">
                      </Route>
                      <Route path="/support">
                      </Route>
                      <Route path="/announcement">
                      </Route>
                      <Route path="/law/:slug">
                          <Law />
                      </Route>
                      <Route path="/category/:slug">
                          <CategoryItem />
                      </Route>
                  </Switch>
              </Layout>
          </BreakpointProvider>
      </BrowserRouter>
  )
}

export default App;
