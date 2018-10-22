import App from './components/App.vue';
import Vue from 'vue';

new Vue({
    components: { App },
    el: '#client',
    template: '<App></App>'
})

if (module.hot) {
    module.hot.accept();
}