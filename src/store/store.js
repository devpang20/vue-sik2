import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                arr.push(localStorage.key(i));
            }
        }
        return arr;
    }
};



export const store = new Vuex.Store({
    state: {
        vueHeader: 'Vuex TODO it!',
        todoItems: storage.fetch()
    }
});