import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Home, Chat } from './components';
import rootReducer from './reducers';
import { Router, Stack, Scene } from 'react-native-router-flux';

const store = createStore(rootReducer);

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
