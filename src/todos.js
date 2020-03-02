import { createStore } from "redux";
import Vue from "vue/dist/vue.js";

const actions = {
    ADD: { type: 'ADD_TODO' },
    REMOVE: { type: 'REMOVE' },
};


var app = new Vue({
    el: "#vue-app",
    data: {
        message: "It works!"
    }
});

export const start = () => {
    const initialState = [];

    const todosReducer = (state = initialState, action) => {
        // TODO finish me plz

        switch (action.type) {
            case actions.ADD.type:
                return [...state, 'item'];
            case actions.REMOVE.type:
                return state.slice(0, state.length - 1);
            default:
                return state;
        }
    };

        
    let store = createStore(
        todosReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    
    Vue.component('todo-list', {
        data: () => store.getState(),
        template: 'TODO list',
    });


    const render = () => {
        document.getElementById("todos").innerHTML = store.getState();
    };

    store.subscribe(() => {
        render();
    });
    render();

    document.getElementById("addBtn").onclick = () => store.dispatch(actions.ADD);
    document.getElementById("removeBtn").onclick = () => store.dispatch(actions.REMOVE);

};