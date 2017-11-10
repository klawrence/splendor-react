import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Game from "../components/Game";
import GameListContainer from "../containers/GameListContainer";

const Splendor = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={GameListContainer}/>
      <Route path="/games/:id" component={Game}/>
    </div>
  </BrowserRouter>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Splendor name="React" />,
    document.body.appendChild(document.getElementById('splendor')),
  )
})
