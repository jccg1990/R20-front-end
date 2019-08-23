<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" to="/">R20</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">
                    <router-link :to="{ name: 'create' }" class="nav-link">Add Student</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link :to="{ name: 'index' }" class="nav-link">All Students</router-link>
                </b-nav-item>
                <b-nav-item href="#" v-if="signedIn">
                    <amplify-sign-out></amplify-sign-out>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import { Auth } from 'aws-amplify'
    import { AmplifyEventBus } from 'aws-amplify-vue';
    export default {
        name: 'Navigation',
        created() {
            AmplifyEventBus.$on('authState', info => {
                if (info === "signedIn") {
                    this.findUser();
                } else {
                    this.$store.state.signedIn = false;
                    this.$store.state.user = null;
                    this.$router.push({ name: 'home' });
                }
            });
        },
        computed: {
            signedIn() {
                return this.$store.state.signedIn;
            }
        },
        methods: {
            async findUser() {
                try {
                    const user = await Auth.currentAuthenticatedUser();
                    this.$store.state.signedIn = true;
                    this.$store.state.user = user;
                } catch (err) {
                    this.$store.state.signedIn = false;
                    this.$store.state.user = null;
                    this.$router.push({ name: 'home' });
                }
            }
        }
    }
</script>

<style scoped>
</style>