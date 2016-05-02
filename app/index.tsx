/// <reference path="../typings/main.d.ts" />

import * as React from "react";
import { render } from 'react-dom';
import App from './root.container';


console.log('hello world');

render(
  <App />,
  document.getElementById('root')
);
