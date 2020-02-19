import { createStore } from "redux";

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(
    counter, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.increment = () => {
    store.dispatch({ type: 'INCREMENT' });
}
window.decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
}

const render = () => {
    document.getElementById("counter").innerHTML = store.getState();
};

store.subscribe(() => {
    render();
});
render();

console.log("yo dawg");