<template>
<div class="grid-12">
  <div class="grid-4 additional">
    <input type="checkbox" id="cebola" value="0" v-model="addValue">
    <label for="cebola">
      <span>-</span><p class="large">Cebola</p>
    </label>
  </div>
  <div class="grid-4 additional">
    <input type="checkbox" id="borda" value="5" v-model="addValue" @change="addTime(addValue.indexOf('5'))">
    <label for="borda">
      <span>+</span><p class="large">Borda Recheada</p>
    </label>
  </div>
  <div class="grid-4 additional">
    <input type="checkbox" id="Bacon" value="3" v-model="addValue">
    <label for="Bacon">
      <span>+</span><p class="large">Bacon</p>
    </label>
  </div>
</div>
</template>

<script>
export default {
  name:'addVue',
  data(){
    return{
      addValue: [],
    }
  },
  methods:{
    hasAdd: function(param){ /*Função para reduzir os valores da array (calcular)*/
      if(param.length > 0){
        this.$store.commit('setAddValue',this.addValue.reduce(function(a,b){return parseInt(a)+parseInt(b)}));
      }else{
        this.$store.commit('setAddValue','0')
      }
    },
    addTime: function(param){ /* Função para verificar se borda foi selecionada e adicionar mais 5 min */
      if(param > -1){
        this.$store.commit('setTime',+this.$store.getters.getTime+5)
      }else{
        this.$store.commit('setTime', +this.$store.getters.getTime-5)
      }
    }
  },
  updated(){
    this.hasAdd(this.addValue),
    this.$store.commit('setAdd',this.addValue)
  }
}
</script>

<style scoped>
input[type="checkbox"]:checked ~ label{
  color: #88BB99;
}
input[type="checkbox"]{
  display: none;
}
.large{
  font-size: 1.5em;
  text-transform: uppercase;
}
div  span{
  background: #FF4F3B;
  color: #FFF;
  display: inline-block;
  margin-bottom: 20px;
  cursor: pointer;
  width: 3em;
  border-top-right-radius: 1em;
  font-weight: bolder;
}
@media (max-width: 739px){
  .additional{
    margin-bottom: 10px;
  }
}
</style>
