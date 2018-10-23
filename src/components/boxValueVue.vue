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
        <p class="medium total grid-10">
            <span>Total </span><span>R$ {{parseInt($store.getters.getValue)+parseInt($store.getters.getAddValue)}},00</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "boxValueVue",
    };

</script>

<style scoped>
    p {
        margin: 10px 30px;
        display: flex;
        justify-content: space-between;
    }

    .time {
        bottom: 120px;
        display: block;
        position: absolute;
    }

    .separator {
        border: 1px solid red;
        display: block;
        position: absolute;
        bottom: 60px;
        margin-left: -10px;
        width: 300px;
        max-width: 100%;
    }

    .total {
        margin: 20px;
        position: absolute;
        bottom: 0;
        max-width: 100%;
    }

    @media (max-width: 739px) {
        .separator{
            margin-left: 0px;
        }
        .total{
            width: 250px;
        }
    }
</style>
