<style scoped>
  nav >>> button {
    padding: 0px 0 !important;
  }
  nav >>> div {
    margin-bottom: 0px !important;
  }
</style>

<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" to="/">R20</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" v-if="signedIn">
                    <router-link :to="{ name: 'create' }" class="btn btn-info">Add Student</router-link>
                </b-nav-item>
                <b-nav-item href="#" v-if="signedIn">
                    <router-link :to="{ name: 'index' }" class="btn btn-info">All Students</router-link>
                </b-nav-item>
                <b-nav-item href="#" v-if="signedIn">
                    <amplify-sign-out class="btn btn-info"></amplify-sign-out>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import { AmplifyEventBus } from 'aws-amplify-vue';
    import utilities from '../assets/security.js';

    export default {
        name: 'Navigation',
        created() {
            AmplifyEventBus.$on('authState', info => {
                if (info === "signedIn") {
                    utilities.findUser();
                } else {
                    utilities.findUser();
                    this.$router.push({ name: 'home' });
                }
            });
        },
        computed: {
            signedIn() {
                return this.$store.getters.user;
            }
        },
    }
</script>
