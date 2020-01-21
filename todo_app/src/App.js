import React, {useReducer} from 'react';
import './App.css';
import {todoReducer, initalState} from './reducers/todorReducer';

function App() 
{
  const [state, dispatch] = useReducer(todoReducer, initalState);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
