<template>
    <basic-template sub="Escolha os adicionais">
        <add-pizza-vue>
            <add-vue />
        </add-pizza-vue>
    </basic-template>
</template>

<script>
    import basicTemplate from '@/templates/basicTemplate.vue'
    import addPizzaVue from '@/components/addPizzaVue.vue'
    import addVue from '@/components/addVue.vue'
    export default {
        name: 'stageThree',
        components: {
            basicTemplate,
            addPizzaVue,
            addVue
        },
        data() {
            return {}
        },
        created() {
            if (!this.$store.getters.getSize) {
                window.location.href = "/"
            }
        }
    }
</script>

<style>

</style>