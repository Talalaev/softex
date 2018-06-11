<template>
    <b-navbar class="mb-4" toggleable="md" type="dark" variant="info" sticky="sticky">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Spain Here</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/home">
                    Home
                </b-nav-item>
                <b-nav-item to="/about-us">
                    AboutUs
                </b-nav-item>
                <b-nav-item to="/contact-us">
                    ContactUs
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                sticky: true
            };
        }
    }
</script>

<style scoped>
</style>
