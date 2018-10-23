<template>
    <span class="box-itens">
        <div class="grid-4">
            <input type="radio" name="size" id="small" value="Pequena" v-model="size">
            <label for="small"><img src='../assets/pizza.png' alt="imagem pizza" class="pizza-small">
                <p class="small">Pequena</p>
            </label>
        </div>
        <div class="grid-4">
            <input type="radio" name="size" id="medium" value="Media" v-model="size">
            <label for="medium"><img src='../assets/pizza.png' alt="imagem pizza" class="pizza-medium">
                <p class="small">Media</p>
            </label>
        </div>
        <div class="grid-4">
            <input type="radio" name="size" id="big" value="Grande" v-model="size">
            <label for="big"><img src='../assets/pizza.png' alt="imagem pizza" class="pizza-big">
                <p class="small">Grande</p>
            </label>
        </div>
    </span>
</template>

<script>
    export default {
        name: 'sizeVue',
        data() {
            return {
                size: null
            }
        },
        methods: {
            hasValue: function(param) { /*Verificar qual tamanho da pizza, poderia ser substituido por um object*/
                switch (param) {
                    case 'Grande':
                        this.$store.commit('setValue', 40);
                        this.$store.commit('setTime', 25);
                        return '40,00'
                        break;
                    case 'Media':
                        this.$store.commit('setValue', 30);
                        this.$store.commit('setTime', 20);
                        return '30,00';
                        break;
                    case 'Pequena':
                        this.$store.commit('setValue', 20);
                        this.$store.commit('setTime', 15);
                        return '20,00';
                        break;
                    default:
                        return '0,00'
                }
            }
        },
        updated() {
            this.hasValue(this.size);
            this.$store.commit('setSize', this.size)
        }
    }

</script>

<style scoped>
    .box-itens {
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: flex-end;
        margin-top: 40px;
    }

    .pizza-small {
        width: 90px;
        max-width: 100%;
    }

    .pizza-medium {
        width: 140px;
        max-width: 100%;
    }

    .pizza-big {
        width: 200px;
        max-width: 100%;
    }

    input[type=radio]:checked~label {
        color: #88BB99;
        border-bottom: #FF413B 2px solid;
    }

    input[type=radio] {
        display: none;
    }

    p.small {
        margin-top: 10px;
        font-family: 'Neucha';
        font-weight: 900;
        font-size: 1em;
    }

    @media (max-width: 739px) {

        .pizza-big,
        .pizza-medium,
        .pizza-small {
            width: 70px;
        }

        p {
            margin-bottom: 10px;
        }
    }

</style>
