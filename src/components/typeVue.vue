<template>
    <span>
        <div class="grid-12 flavor">
            <input type="radio" id="calabresa" name="typeFlavor" value="Calabresa" v-model="type">
            <label for="calabresa">
                <p class="large"><span>1</span> - Calabresa</p>
                <p class="small">Mussarela, Molho ao sugo e Calabresa</p>
            </label>
        </div>
        <div class="grid-12 flavor">
            <input type="radio" id="marguerita" name="typeFlavor" value="Marguerita" v-model="type">
            <label for="marguerita">
                <p class="large"><span>2</span> - Marguerita</p>
                <p class="small">Mussarela, Molho ao sugo, tomate e manjericão</p>
            </label>
        </div>
        <div class="grid-12 flavor">
            <input type="radio" id="portuguesa" name="typeFlavor" value="Portuguesa" v-model="type" @change="hasType(type)">
            <label for="portuguesa">
                <p class="large"><span>3</span> - Portuguesa</p>
                <p class="small">Mussarela, Molho ao sugo e Calabresa</p>
            </label>
        </div>
    </span>
</template>
<script>
    export default {
        name: 'typeVue',
        data() {
            return {
                type: []
            }
        },
        methods: {
            hasType: function(param) {
                if (param == 'Portuguesa') {
                    this.$store.commit('setTime', +this.$store.getters.getTempTime + 5)
                } else {
                    if (this.$store.getters.getTempTime == this.$store.getters.getTime) {
                        this.$store.commit('setTime', this.$store.getters.getTime)
                    } else {
                        this.$store.commit('setTime', +this.$store.getters.getTime - 5)
                    }
                }
            }
        },
        created() {
            if (this.$store.getters.getTempTime > 0) {
                this.$store.commit('setTime', this.$store.getters.getTempTime)
            } else {
                this.$store.commit('setTempTime', this.$store.getters.getTime)
            }
        },
        updated() {
            this.$store.commit('setType', this.type);
            this.hasType(this.type)
        }
    }

</script>
<style scoped>
    input[type=radio]:checked~label {
        color: #88BB99;
    }

    input[type=radio] {
        display: none;
    }

    .large {
        font-size: 1.5em;
        cursor: pointer;
        text-transform: uppercase;
    }

    .large span {
        background: #FF4F3B;
        color: #F7F7F7;
        display: inline-block;
        width: 2em;
        border-top-right-radius: 1em;
    }

    .flavor {
        margin-bottom: 30px;
    }

</style>
