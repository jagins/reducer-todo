export const todoReducer = (state, action) => {
    switch (action.type) 
    {
        case 'ADD_TODO':
            return [...state, {item: action.payload, completed: false, id: Date.now()}];

        case 'TOGGLE_COMPLETED':
          const newState = state.map(item => {
               if(item.id === action.payload)
               {
                   item.completed = !item.completed;
                   return item;
               }
               else{
                   return item;
               }
           });
           return [...state, newState];

           case 'CLEAR_COMPLETED':
               const tempState = state.filter(item => !item.completed)
               return [...tempState];
        default:
            return state;
    }
}

export const initalState = [ 
    { 
        item: 'Learn about reducers',
        completed: false,
        id: Date.now() 
    }]