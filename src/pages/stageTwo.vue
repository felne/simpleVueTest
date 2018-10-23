<template>
    <basic-template sub="Escolha o sabor">
        <type-pizza-vue>
            <type-vue />
        </type-pizza-vue>
    </basic-template>
</template>

<script>
    import basicTemplate from '@/templates/basicTemplate.vue'
    import typePizzaVue from '@/components/typePizzaVue.vue'
    import typeVue from '@/components/typeVue.vue'
    export default {
        name: 'stageTwo',
        components: {
            basicTemplate,
            typePizzaVue,
            typeVue
        },
        data() {
            return {}
        },
        created() {
            if (!this.$store.getters.getSize) { /*força o usuario retornar a pagina anterior caso vuex size não possua valor */
                window.location.href = "/"
            }
            this.$store.commit('setAddValue', '0')
            this.$store.commit('setType', '')
            this.$store.commit('setAdd','')
        }
    }
</script>

<style>

</style>