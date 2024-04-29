// const state = {
//     users: [
//         {
//             id: 1,
//             name: "Sanket",
//             todos: [
//                 {id: 1, name: 'complete development'},
//                 {id: 2, name: 'raise the bug'}
//             ]
//         },
//         {
//             id: 2,
//             name: "Sarthak",
//             todos: [
//                 {id: 1, name: 'complete ppt'},
//                 {id: 2, name: 'raise interview'}
//             ]
//         },
//         {
//             id: 3,
//             name: "JD",
//             todos: [
//                 {id: 1, name: 'plan the sprint'}
//             ]
//         },
//     ]
// }

// bad code
// function reducer(state, action) {
//     if(action.type == 'EDIT_TODO') {
//         let newTodoData = action.name;
//         const newState = state.map(user => {
//             if(user.id == action.userId) {
//                 let newTodo = user.todos.map(todo => {
//                     if(todo.id == action.todoId) {
//                         todo.name = newTodoData;
//                     }
//                     return newTodo;
//                 });
//                 user.state = newTodo;
//             }
//             return user;
//         });
//     }
// }

const state = {
    users: [
        {
            id: 1,
            name: "Sanket"
        },
        {
            id: 2,
            name: "Sarthak"
        },
        {
            id: 3,
            name: "JD"
        },
    ]
}

todos: [
    {userId: 1, todoId: 1, name: 'complete development'},
    {userId: 1, todoId: 2, name: 'raise the bug'},
    {userId: 3, todoId: 1, name: 'complete ppt'},
    {userId: 2, todoId: 2, name: 'raise interview'},
    {userId: 2, todoId: 1, name: 'plan the sprint'}
]