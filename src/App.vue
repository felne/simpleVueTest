<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body{
    background-image: url(assets/fundo.png), linear-gradient(120deg,#FE9488,#FE7566);
  }
</style>
