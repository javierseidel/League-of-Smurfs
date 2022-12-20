import React from 'react';
import { AuthProvider } from '../auth/auth';
import Home from '../components/Home'

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;