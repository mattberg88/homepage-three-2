import ReactDOM from 'react-dom';
import React from 'react';

import App from './app';
import './styles.css';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef
  ReactDOM.render(<App />, document.getElementById('root'));
}
