import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';
import Root from './root';

ReactGA.initialize('UA-66691207-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Root />, document.getElementById('root'));
