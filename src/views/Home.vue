<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WelcomePage/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import WelcomePage from '@/components/WelcomePage.vue'
  export default {
    name: 'home',
    components: {
      WelcomePage
    }
  }
</script>