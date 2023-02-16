export const listTodo = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce=>responce.json())
    .then(data => dispatch({type : 'GET_LIST_TODO',payload: data}))
}

//this datav comes from the component
export const addTodo = (data) =>  {
    return{
        type: 'ADD_TODO',
        payload: data
    }
        
    
}

export const deleteTodo = (data) => {
     return {
        type: 'DELETE_TODO',
        payload: data
     }
}