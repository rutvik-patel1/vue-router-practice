<template>
  <h1>home</h1>
  <div style="display:flex;">
      <section style="flex: 0 0 50% ;padding:30px 0; background-color:cornflowerblue;">
        <router-link to="/home/1" >1</router-link><br>
        <router-link to="/home/2">2</router-link><br>
        <router-link to="/home/3">3</router-link><br>
        <router-link to="/home/4">4</router-link><br>
        <router-link to="/home/5">5</router-link><br>
        <router-link to="/home/6">6</router-link><br>
        <router-link to="/home/7">7</router-link><br>
        <router-link to="/home/8">8</router-link><br>
      </section>
      <section style="flex: 0 0 50%;padding:30px 0; background-color: bisque;">
        
        <router-view name="section2"> </router-view>
        
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>