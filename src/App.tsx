import React from 'react';
import './App.css';
import Main from './containers/Main';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <div className="App">
            <Main />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
