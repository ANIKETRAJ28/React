import { createStore, bindActionCreators } from 'redux';

function demoReducer(state, action) {
    if(action.type == "add_item") {
        return [...state, {name: action.itemName, quantity: action.itemQuantity}];
    }
    return state;
}

const add_item = (name, quantity) => ({
    type: "add_item",
    itemName: name,
    itemQuantity: ((quantity) ? quantity : 1)
});

const initialState = [{name: "apple"}, {name:" rice"}];

const store = createStore(demoReducer, initialState);
store.subscribe(() => console.log("state might change"));

console.log(store.getState());

// the only way to update the state is by using dispatch function
// store.dispatch(add_item("banana", 3));
// console.log(store.getState());

// store.dispatch(add_item("guava", 8));
// console.log(store.getState());

// store.dispatch(add_item("mango"));
// console.log(store.getState());

// store.dispatch({
//     type: "unknown",
//     itemName: "xyz"
// });

// console.log(store.getState());

const actions = bindActionCreators({ add_item }, store.dispatch);

// console.log(actions);
actions.add_item('banana', 4);
actions.add_item('mango');
console.log(initialState);
console.log(store.getState());