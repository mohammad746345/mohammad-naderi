import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Layout from "../Layout/Layout";
import Blog from "../Blog/Blog";
import Law from "../Law/Law";
import CategoryItem from "../CategoryItem/CategoryItem";


function WikiApp() {
  return (

      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path="/wiki">
                      <Blog />
                  </Route>
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
      </BrowserRouter>
  )
}

export default WikiApp;
