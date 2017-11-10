import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import GameList from "../components/GameList";
import Game from "../components/Game";

const Splendor = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={GameList}/>
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
