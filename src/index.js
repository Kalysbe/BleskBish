import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import GlobalRouters from './globalRouters'
ReactDOM.render(
<BrowserRouter>
  <GlobalRouters />
</BrowserRouter>,
 document.getElementById('root'));


serviceWorker.unregister();
