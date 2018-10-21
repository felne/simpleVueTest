<template>
    <div>
        <div class="grid-12 box-itens">
            <slot />
        </div>

        <div class="grid-12 btn-group">
            <router-link to="/stageTwo" class="btn medium">Voltar</router-link>
            <button class="btn medium" @click="visible = true">Finalizado</button>
        </div>
        <modal-vue v-if="visible"></modal-vue>
    </div>
</template>

<script>
    import modalVue from "../components/modalVue.vue";
    export default {
        name: "addPizzaVue",
        components: {
            modalVue
        },
        data() {
            return {
                visible: false
            };
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box-itens {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        margin-top: 120px;
    }

    .btn-group {
        justify-content: space-between;
    }

    @media (max-width: 426px) {
        .box-itens {
            flex-wrap: wrap;
            margin-bottom: -80px;
            margin-top: 20px;
        }
    }

</style>
