/**
 * Created by Hanweir on 6/17/2017.
 */

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
        },
    methods: {
        changeTitle: function(event) {
            return this.title = event.target.value;
        }
    }
});

