<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

  export default {
    name: 'About',
    components: {
    },
    computed: {
    },
    mounted() {
      this.$axios.post('/api/v1/cmm/hot/products',{size: 20})
              .then((res) => {
                console.log(res);
              })
              .then(() => {
                console.log(888);
              })
              .then(() => {
                console.log(999);
              })
              .catch((e) => {
                console.log(e);
              })
    }
  }
</script>
