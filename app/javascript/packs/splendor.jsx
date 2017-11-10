import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import GameListContainer from "../containers/GameIndexContainer";
import GameContainer from "../containers/GameContainer";

const Splendor = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={GameListContainer}/>
      <Route exact path="/games" component={GameListContainer}/>
      <Route path="/games/:id" component={GameContainer}/>
    </div>
  </BrowserRouter>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Splendor name="React" />,
    document.body.appendChild(document.getElementById('splendor')),
  )
})
