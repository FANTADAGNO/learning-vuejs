
Vue.component('brand', {
    template: '<li><strong>{{ brand.name }}</strong>, {{ brand.country }}</li>',
    props: ['brand']
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! We are here',
        welcome: 'Bienvue sur mon site',
        name: 'Fanta Dagno ',
        loadingAt: new Date().toLocaleString(),
        show: true,
        
        site: 'https://vuejs.org/v2/guide/syntax.html',
        brands: [
            {name: 'LVMH', country: 'France'},
            {name: 'Nike', country: 'US'},
            {name: 'Huawei', country: 'China'}
        ],
        count: 0
    },
    methods: {
        inc: function() {
            this.count += 1;
        },
        dec: function() {
            this.count -= 1;
        }
    }
})