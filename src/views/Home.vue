<template>
  <div class="home">
    <p>{{getData}}</p>
    <p>{{this.$store.state.data}}</p>
    <p>1111111</p>
<!--    <img alt="Vue logo" src="../assets/logo.png" v-if="false">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    getData() {
      return this.$store.getters['Vuextest/getData'];
    },
  },
  mounted() {
    this.$store.dispatch('Vuextest/fetchData', {data: 222222});
    this.$axios.get('/api/v1/cmm/hot/products',{size: 20})
            .then((res) => {
              console.log(res);
            })
            .then(() => {
              console.log(4444);
            })
            .then(() => {
              console.log(55555);
            })
            .catch((e) => {
              console.log(e);
            })
  }
}
</script>
