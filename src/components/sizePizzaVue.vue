<template>
  <span>
    <div class="grid-12">
      <slot/>
    </div>
    <div class="grid-12 btn-group">
      <router-link to="/stageTwo" class="btn medium" v-if="$store.getters.getSize">Proximo</router-link>
    </div>
  </span>
</template>

<script>
import sizeVue from '../components/SizeVue.vue'
export default {
  name: 'sizePizzaVue',
  components:{
    sizeVue
  }
}
</script>

<style scoped>
.btn-group{
  justify-content: flex-end;
}
@media (max-width: 739px){
  .box-itens{
    flex-wrap: wrap;
    margin-bottom: -80px;
    margin-top: 20px;
  }
}
</style>
