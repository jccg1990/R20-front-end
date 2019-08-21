
<template>
  <div id="app" class="container">

    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">R20</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link :to="{ name: 'Create' }" class="nav-link">Add Student</router-link></b-nav-item>
            <b-nav-item href="#"><router-link :to="{ name: 'Index' }" class="nav-link">All Students</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>

      <div class="gap"></div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from './components/Footer'
  export default {
    components:{
      'my-footer': Footer
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .gap {
    margin-top: 50px;
  }
</style>
