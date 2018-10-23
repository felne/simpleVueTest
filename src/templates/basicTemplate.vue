<template> <!-- Template base para todas as paginas -->
    <div class="container">
        <div class="grid-8 box">
            <!-- Caixa principal - pedido -->
            <h1 class="large center">Faça seu pedido</h1>
            <h3 class="medium center">{{sub}}</h3>
            <slot />
        </div> <!-- Termina caixa principal -->
        <div class="grid-4 box-secondary">
            <!-- Caixa secundaria - valor -->
            <h1 class="large center">Resumo</h1>
            <box-value-vue />
        </div> <!-- Termina caixa secundaria -->
    </div>
</template>

<script>
    import boxValueVue from '@/components/boxValueVue.vue'
    export default {
        name: 'basicTemplate',
        components: {
            boxValueVue
        },
        props: ['sub']
    }

</script>

<style>
    .box {
        position: relative;
        margin-top: 100px;
        min-height: 450px;
        background: #FFF;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .box-secondary {
        position: relative;
        margin-top: 100px;
        min-height: 450px;
        background: #FFF;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .btn-group {
        display: flex;
        position: absolute;
        bottom: 0px;
    }

</style>
