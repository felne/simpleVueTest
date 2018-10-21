<template>
    <div class="grid-12">
        <p class="medium">
            <span>{{$store.getters.getSize || 'Tamanho'}}</span><span>R$ {{$store.getters.getValue}},00</span>
        </p>
        <p class="small">
            <span>Adicional</span><span>{{$store.getters.getAddValue}},00</span>
        </p>
        <p class="small">
            <slot />
        </p>
        <p class="medium time">
            <span>Tempo de preparo : </span><span>{{$store.getters.getTime}} min</span><br />
            <span>Sabor : </span><span>{{$store.getters.getType || 'Escolha o sabor'}}</span>
        </p>
        <span class="separator"></span>
        <p class="medium total">
            <span>Total</span><span>{{some(+$store.getters.getValue,+$store.getters.getAddValue)}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "boxValueVue",
        props: ["valueAd"],
        data() {
            return {};
        },
        methods: {
            some: function(param1, param2) {
                return "R$ " + (param1 + param2) + ",00";
            }
        }
    };

</script>

<style scoped>
    p {
        margin: 10px 30px;
        display: flex;
        justify-content: space-between;
        max-width: 240px;
    }

    .time {
        margin: 120px 40px 0px 40px;
        display: block;
        position: absolute;
    }

    .separator {
        border: 1px solid red;
        display: block;
        position: absolute;
        bottom: 60px;
        margin: 10px 0px;
        width: 300px;
        max-width: 100%;
    }

    .total {
        margin: 30px;
        position: absolute;
        bottom: 0;
    }

</style>
