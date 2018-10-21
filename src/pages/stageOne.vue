<template>
    <basic-template sub="Escolha o tamanho">
        <size-pizza-vue>
            <size-vue />
        </size-pizza-vue>
    </basic-template>
</template>

<script>
    import basicTemplate from '@/templates/basicTemplate.vue'
    import sizePizzaVue from '@/components/sizePizzaVue.vue'
    import sizeVue from '../components/SizeVue.vue'
    export default {
        name: 'stageOne',
        components: {
            basicTemplate,
            sizePizzaVue,
            sizeVue
        },
        created() {
            this.$store.commit('setType', null),
                this.$store.commit('setSize', ''),
                this.$store.commit('setTime', 0),
                this.$store.commit('setValue', '0'),
                this.$store.commit('setTempTime', 0)
        }
    }
</script>

<style>

</style>