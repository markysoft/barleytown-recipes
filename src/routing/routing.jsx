import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from '../header/header'
import RecipeList from '../recipe-list/recipe-list'
import RecipeContainer from '../recipe-view/recipe-container'


export default function Routing() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/recipe/:recipeId" component={RecipeContainer} />
        <Route path="/" component={RecipeList} />
      </Switch>
    </Router>
  )
}
