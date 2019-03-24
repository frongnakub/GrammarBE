<template>
  <div id="app">
    <div id="nav">
      <h1>Manage Question Login Page</h1>
      <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated ="setAuthenticated"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'frongnakub',
        password: 'password'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({name: 'Login'})
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
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
  margin-top: 60px;
}
</style>
