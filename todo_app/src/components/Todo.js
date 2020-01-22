import React from 'react';

function Todo(props)
{
    return (
        <div className={`item${props.item.completed ? '-completed' : ''}`}
             onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.item.id})}>
            <h3>{props.item.item}</h3>
        </div>
    );
}

export default Todo;