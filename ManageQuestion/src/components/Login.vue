<template>
  <div class="login">
    <div class="logins">
      <div class="main">
        <div class="form-w3agile">
          <h2>Please Login</h2>
          <div id="use">
            <label>Username</label>
          </div>
          <div class="key">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <input
              type="text"
              value="username"
              name="username"
              placeholder="username"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'username';}"
              required
              v-model="username"
            >
            <div class="clearfix"></div>
          </div>
          <div id="pass">
            <label>Password</label>
          </div>
          <div class="key">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              type="password"
              value="Password"
              name="Password"
              placeholder="password"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Password';}"
              required
              v-model="password"
            >
            <div class="cle arfix"></div>
          </div>
          <br>
          <div class="submit">
            <router-link to="/">
              <p>
                <button @click="checkUsernameNPassword()">Login</button>
              </p>
            </router-link>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

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
  margin-bottom: 2em;
}
.key i {
  float: left;
  color: black;
  font-size: 1.1em;
  padding: 13px;
}
.key input[type="text"],
.key input[type="password"] {
  width: 90%;
  height: 40px;
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
