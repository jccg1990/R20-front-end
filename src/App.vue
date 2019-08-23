<template>
  <div id="app">
    <my-navbar></my-navbar>

    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>

    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from './views/Footer'
  import Navigation from './components/Navigation'
  export default {
    components: {
      'my-footer': Footer,
      'my-navbar': Navigation
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

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>