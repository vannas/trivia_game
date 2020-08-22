<template>
  <div id="app" class="container">    
    <nav class="row">
      <div class="nav-wrapper" id="nav">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li v-if="$route.path != '/login'"><router-link to="/"><i class="large material-icons">house</i></router-link></li>
          <li><router-link to="/play"><i class="large material-icons">extension</i></router-link></li>
          <li><router-link to="/addquestion"><i class="large material-icons">contact_support</i></router-link></li>
          <li><router-link to="/login" @click="logout" v-if="user"><i class="large material-icons out">follow_the_signs</i>Exit</router-link></li> 
          <li class="welcome" v-if="user"><h5>Welcome {{user.name}}!</h5></li>
        </ul>
      </div>
    </nav>

    <router-view/> 

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth';


export default {
  name: 'App',
  components: {
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut();
    },
  }
}
</script>

<style>
#app, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
}

#nav{
  background: #ED4264;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to center, #FFEDBC, #ED4264);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to center, #FFEDBC, #ED4264); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#nav li .out{
  display: inline-block;
  margin-right:0.5em;
}

.welcome{
  margin-left:22em;
}
</style>
