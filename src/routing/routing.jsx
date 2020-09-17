import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from '../header/header'
import RecipeListContainer from '../recipe-list/recipe-list-container'
import RecipeContainer from '../recipe-view/recipe-container'


export default function Routing() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/recipe/:recipeId" component={RecipeContainer} />
        <Route path="/" component={RecipeListContainer} />
      </Switch>
    </Router>
  )
}
