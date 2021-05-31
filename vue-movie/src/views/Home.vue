<template>
  <div class="home">
    <Moviedata></Moviedata>
  </div>
</template>

<script>
// @ is an alias to /src
import Moviedata from '@/components/Moviedata.vue'

export default {
  name: 'Home',
  components: {
    Moviedata
  }
}
</script>

<style scoped>
.home {
  background-color:rgb(49, 55, 56);
}
</style>
