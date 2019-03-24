<template>
  <div class="login">
    <div class="logins">
      <div class="main">
        <div class="form-w3agile">
          <h2>Please Login</h2>
          <div id="use">
          </div>
          <div class="key">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <input type="text" name="username" v-model="input.username" placeholder="Username"><br><br><br>
            <div class="clearfix"></div>
          </div>
          <div id="pass">
          </div>
          <div class="key">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="password" name="password" v-model="input.password" placeholder="Password"><br><br>
            <div class="cle arfix"></div>
          </div>
          <br>
          <div class="submit">
            <button type="button" v-on:click="login()">Login</button>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (
          this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password
        ) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'manage' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style type="text/css">

.login {
  background: #999;
}
.logins {
  padding: 2em 0;
}
.main {
  width: 65%;
}
.main {
  width: 30%;
  margin: 0em auto;
  padding: 3em;
  background: white;
  margin-bottom: 2em;
}
.form-w3agile h3 {
  color: black;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 1em;
}
.key {
  background: white;
  border: none;
  margin-bottom: 1em;
}
.key i {
  float: left;
  color: black;
  font-size: 1.1em;
  padding: 7px;
}
.key input[type="text"],
.key input[type="password"] {
  width: 90%;
  height: 35px;
  padding: 8px 8px;
  font-size: 1em;
  border: 1px solid black;
  border-bottom: 1px solid black;
  outline: none;
  color: darkslategray;
  float: left;
  background: none;
}
.submit button {
  background: #fdb515;
  color: white;
  text-align: center;
  padding: 10px 10px;
  border: none;
  font-size: 1.15em;
  outline: none;
  height: 1.25cm;
  width: 8.5cm;
  cursor: pointer;
  margin-bottom: 23px;
}
#use,
#pass {
  text-align: left;
}
</style>
