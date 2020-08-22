<template>
  <div class="container">

      <div class="card light-green text-white" v-if="user">
          <div class="card-title">
              Great game PERSONAX! Your score was (NN%).
          </div>
      </div>
    
      <div class="card">
          <div class="card-content">
              Join the game!    
              <input type="submit" class="btn" value="Play!" @click="go_play">
          </div>
      </div>

    <div class="results">
        <table class="striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody v-for="result in results" :key="result.id">
                <tr>
                    <td>{{result.player}}</td>
                    <td>{{result.score}}%</td>
                    <td v-if="result.score == '100'">3/3</td>
                    <td v-if="result.score == '66'">2/3</td>
                    <td v-if="result.score == '33'">1/3</td>
                    <td v-if="result.score == '0'">0/3</td>
                </tr>
            </tbody>
        </table>

    </div>

  </div>
</template>

<script>
import { db } from '../firebase';  
import 'firebase/auth';
import router from "@/router";

export default {
    name: 'Home',
    data() {
    return {
        results: []
        }
    },
    methods: {
        go_play(){
            router.push('/play');
        },
        logout() {
            this.$store.dispatch('logout');
        }
    },
    computed: {
        user() {
            if (this.$store.state.user == 'null'){
                router.push('/login');
            }
            return this.$store.state.user;
        },
    },
    firestore() {
        return {
        results: db.collection('games')
        }
    }
    
}
</script>

<style>

</style>