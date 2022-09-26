import React from "react"
import { Link } from "react-router-dom";

import logo from '../logo.svg';
import '../App.css';

export default function SignIn() {
  return (
    <div className="App-div">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Sign In</h1>

      <form action="/authenticate" method="POST">
      
        <fieldset className="App-fieldset">
          <label for="email">E-mail</label>
          <input className="App-input" type="email" name="email" inputmode="email" autocomplete="username"/>
        </fieldset>
        
        <fieldset className="App-fieldset">
          <label for="password">Password</label>
          <input className="App-input" type="password" name="password" inputmode="password" autocomplete="current-password"/>
        </fieldset>

        <button className="App-button" type="submit">Entrar</button>

      </form>

      <Link
        className="App-link"
        to="/"
        rel="noopener noreferrer"
      >
        Home
      </Link>
    </div>
  )
}