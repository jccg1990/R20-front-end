<template>
  <div>
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
  </div>
</template>

<script>
  import { AmplifyEventBus } from 'aws-amplify-vue';
  import utilities from '../assets/security.js'

  export default {
    name: 'WelcomePage',
    data() {
      return {
      }
    },
    created() {
      utilities.findUser();

      if(this.signedIn){
        this.$router.push({ name: 'index' });
      }

      AmplifyEventBus.$on('authState', info => {
        utilities.findUser();
        if (info === "signedIn") {
          this.$router.push({ name: 'index' });
        }
      });
    },
    computed: {
      signedIn() {
        return this.$store.getters.user;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
