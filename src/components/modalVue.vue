<template>
    <transition name="fade">
        <div class="modal">
            <div class="modal-wrapper">
                <h1 class="large center">Pedido</h1>
                <hr>
                <p>Tamanho da pizza: <span>{{$store.getters.getSize}}</span></p>
                <p>Sabor da pizza: <span>{{$store.getters.getType}}</span></p>
                <p>Adicionais: <span>{{add.toString()}}</span></p>
                <p>Tempo de preparo: <span>{{$store.getters.getTime}} minutos</span></p>
                <p>Total a pagar: R$ <span>{{parseInt($store.getters.getValue)+parseInt($store.getters.getAddValue)}},00</span></p>
                <div class="btn-group">
                    <router-link to="/stageTwo" class="btn medium">Voltar</router-link>
                    <button class="btn medium" @click="sucess()">Confirma</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'modaVue',
        data() {
            return {
                add: [],
            }
        },
        methods: {
            sucess: function() {
                window.location.href = "/";
                alert('Pedido realizado com sucesso');
            }
        },
        created() {
            this.add = this.$store.getters.getAdd.map(function(param) {
                if (param == '5') {
                    return ' Mais Borda'
                } else if (param == '3') {
                    return ' Mais Bacon'
                } else if (param == '0') {
                    return ' Sem Cebola'
                } else {
                    return false;
                }
            })
        }
    }

</script>
<style scoped>
    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active em versões anteriores a 2.1.8 */
        {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .6);
        width: 100%;
        height: 100%;
        z-index: 9999;
    }

    .modal-wrapper {
        position: relative;
        width: 350px;
        max-width: 100%;
        height: 400px;
        margin: 0 auto;
        top: 100px;
        background: #FFF;
        border-radius: 5px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    }

    .btn-group {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    p {
        margin: 20px;
        font-weight: 700;
        font-size: 1.25em;
    }
    span{
        font-weight: 500;
    }

</style>
