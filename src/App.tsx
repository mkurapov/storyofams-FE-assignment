import React from 'react';
import './App.css';
import Main from './containers/Main';
import { Provider} from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="App">
        <Main />
      </div>
    </div>
    </Provider>
  );
}

export default App;
