import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/ads/App';
import Filter from "./components/actions/FilterForm";

render(<Filter />, document.getElementById("filter"));
render(<App />, document.getElementById('root'));

