<template>
    <span>
        <div class="grid-12 box-itens">
            <slot />
        </div>
        <div class="grid-12 btn-group">
            <router-link to="/" class="btn medium">Voltar</router-link>
            <router-link to="/stageThree" class="btn medium" v-if="$store.getters.getType">Proximo</router-link>
        </div>
    </span>
</template>

<script>
    export default {
        name: 'sizePizzaVue'
    }

</script>

<style scoped>
    .box-itens {
        text-align: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 50px;
    }

    .btn-group {
        justify-content: space-between;
    }

    @media (max-width: 739px) {
        .box-itens {
            flex-wrap: wrap;
        }
    }

</style>
