import * as React from "react";
import { render } from 'react-dom';
import App from './root.container';


console.log('hello world');

render(
  <App />,
  document.querySelector('main')
);
