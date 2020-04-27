import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Home, Chat } from './components';
import rootReducer from './reducers';
import { Router, Stack, Scene } from 'react-native-router-flux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Stack key="mainStack">
            <Scene key="home" component={Home} title="Home"/>
            <Scene key="chat" component={Chat} title="Chat"/>
          </Stack>
        </Router>
      </Provider>
    );
  }
}
