import React from 'react';
import { Routes, Route, } from 'react-router-dom'
import './styles/App.css';
import Login from './containers/login';
import ChatScreen from './containers/chatscreen';
import routes from './static/routes';
import AuthenticatedRoute from './components/authRoutes';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Routes >
          <Route exact path={routes.homePage} element={<Login />} />
          <Route path={routes.homePage} element={<AuthenticatedRoute />} >
            <Route path={routes.chatPage} element={<ChatScreen />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
