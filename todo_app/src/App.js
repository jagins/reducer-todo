import React, {useReducer, useState} from 'react';
import './App.css';
import {todoReducer, initalState} from './reducers/todorReducer';
import Todo from './components/Todo';

function App() 
{
  const [state, dispatch] = useReducer(todoReducer, initalState);
  const [newTodoItem, setNewTodoItem] = useState('');
  
  const handleChange = e =>
  {
    setNewTodoItem(e.target.value)
  }

  return (
    <div className="App">
     <h2 className='Title'>Welcome to your Todo App</h2>
      {state.map(item =>{
        return <Todo key={item.id} item={item} dispatch={dispatch}/>
      })}

      <div>
        <input type='text' name='newTodoItem' value={newTodoItem} onChange={handleChange}/>
        <button onClick={() => {
          dispatch({type: 'ADD_TODO', payload: newTodoItem})
          setNewTodoItem('')}}>Add Item</button>

          <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed Tasks</button>
      </div>
    </div>
  );
}

export default App;
