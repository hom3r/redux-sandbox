import { start } from './src/todos';

start();

// const initialState = 0;

// export const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// };

// let store = createStore(
//     counter, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export const increment = () => {
//     store.dispatch({ type: 'INCREMENT' });
// };

// export const decrement = () => {
//     store.dispatch({ type: 'DECREMENT' });
// };

// const render = () => {
//     document.getElementById("counter").innerHTML = store.getState();
// };

// store.subscribe(() => {
//     render();
// });
// render();

// document.getElementById("incrementBtn").onclick = (increment);
// document.getElementById("decrementBtn").onclick = (decrement);