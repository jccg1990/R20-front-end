<template>
  <div id="app">
    <my-navbar></my-navbar>

    <transition name="fade">
      <div class="mt-2">
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
  :root {

  /* Colors */
  --amazonOrange: #17a2b8 !important; /* Redefined to dark green */
  --lightAmazonOrange: #FFAC31;
  --darkAmazonOrange: #E88B01;
  --squidInk: #232F3E;
  --lightSquidInk: #31465F;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #C4C4C4;
  --silver: #E1E4EA;
  --darkBlue: #31465F;
  --red: #DD3F5B;
  --white: #FFFFFF;
  --light-blue: #00a1c9;
  }

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
