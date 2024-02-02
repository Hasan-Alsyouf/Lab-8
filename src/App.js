import React from 'react';
import Dashboard from './components/Dashboard';
import { SelectedPostProvider } from '././components/SelectedPostContext';

function App() {
  return (
    <SelectedPostProvider>
    <div className="App">
     
      <Dashboard />
    
    </div>
    </SelectedPostProvider>
  );
}

export default App;
