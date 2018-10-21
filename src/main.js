// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

var store = {
    state: {
        size: '',
        value: '0',
        time: 0,
        tempTime: '',
        type: '0',
        addValue: '0',
        add: ''
    },
    getters: {
        getSize: state => {
            return state.size
        },
        getValue: state => {
            return state.value
        },
        getTime: state => {
            return state.time
        },
        getType: state => {
            return state.type
        },
        getAddValue: state => {
            return state.addValue
        },
        getTempTime: state => {
            return state.tempTime
        },
        getAdd: state => {
            return state.add
        }
    },
    mutations: {
        setSize(state, param) {
            state.size = param;
        },
        setValue(state, param) {
            state.value = param;
        },
        setTime(state, param) {
            state.time = param;
        },
        setType(state, param) {
            state.type = param;
        },
        setAddValue(state, param) {
            state.addValue = param;
        },
        setTempTime(state, param) {
            state.tempTime = param
        },
        setAdd(state, param) {
            state.add = param;
        }
    }
};

new Vue({
    el: '#app',
    store: new Vuex.Store(store),
    router,
    components: {
        App
    },
    template: '<App/>'
})
