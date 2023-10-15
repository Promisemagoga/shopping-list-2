import {createSlice, nanoid} from "@reduxjs/toolkit" 

// const intialState = {
//     todos: [],
// };

export const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {
            todos: []
        }
    ],
    reducers:{
        addTodo: (state,action) =>{
          const todo = {
            id: nanoid(),
            text: action.payload
          }

          state.todos.push(todo)

        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)

        }
    },

})


//exporting all the actions in your reducer
export const {addTodo, removeTodo} = todoSlice.actions

//exporting the entire reducer
export default todoSlice.reducer