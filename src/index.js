import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mdReducer from './reducers/mdReducer'
import Editor from './containers/editor'
import Preview from './containers/preview'

const store = createStore(mdReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id='container'>
        <div id='header'>
          MARKDOWN PREVIEWER
        </div>
        <section>
          <Editor />
          <Preview />
        </section>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

