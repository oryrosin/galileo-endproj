import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EntrancePage from './pages/EntrancePage';
import SignupPage from './pages/SignupPage';
import jsonUsers from './DB/users.json';


function App() {
  const [users, setUsers] = useState(jsonUsers);      // HACK ALERT: holding all users as state only because this is a JSON based application (no server side)
  const [activeUser, setActiveUser] = useState(jsonUsers[0]);   // During development it's conveient to be logged in by default

  function handleLogout() {
    setActiveUser(null);
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
        <Route exact path="/signup"><SignupPage activeUser={activeUser}/></Route>
        <Route exact path="/entrance"><EntrancePage activeUser={activeUser} onLogout={handleLogout}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
