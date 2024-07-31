import React from 'react';
import { RealHead } from '../src/components/head/RealHead';
import { RealBody } from './components/body/RealBody';
const App: React.FC = () => {
  return (
    <div className="text-center bg-blue-100 min-h-screen">
     <RealHead/>
     <RealBody/>
    </div>
  );
}

export default App;