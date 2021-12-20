import React from 'react';

import navBarWithSwitch from './components/NavBar';
import CustomSwitch from './switch';

const App = () => <div className='App'>{navBarWithSwitch(CustomSwitch)}</div>;

export default App;
