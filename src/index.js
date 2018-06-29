import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CheeseList cheeses={[
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
]} />, document.getElementById('root'));
registerServiceWorker();
