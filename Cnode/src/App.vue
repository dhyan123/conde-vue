<template>
  <div id="app">
    <headers></headers>
    
     <router-view></router-view>
   
   
    
  </div>
</template>

<script>
import Headers from './components/headers';
import Ariticl from './components/Ariticl';

export default {
 name:'app',
  components: {
        Headers,
        Ariticl,
    },
    created(){  // 发送ajax请求
    this.$store.dispatch('getListAction')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
