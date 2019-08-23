<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><router-link to="/">R20</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">
                    <router-link :to="{ name: 'Create' }" class="nav-link">Add Student</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link :to="{ name: 'Index' }" class="nav-link">All Students</router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style>
</style>