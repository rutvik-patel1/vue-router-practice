<template>

  <h1>{{data}}</h1>
 
</template>

<script>
export default {
     computed:{
       data(){
         return this.$route.params.id
       }
     },
     watch:{
       data(newV,oldV){
         console.log("in watch")
         console.log(oldV+"----->"+newV)
       }
     }
}
</script>

<style>
h1{
  font-size: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>