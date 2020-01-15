const URL = 'http://localhost:4000/api/pedidos'

new Vue({
    el: '#main',

    created: function () {
        this.getPedidos();
    },
    data: {
        pedidos: []
    },

    methods: {
        getPedidos: function () {
            axios.get(URL).then(res => {
                this.pedidos = res.data;
                
            })
        }
    }

})





   
    






