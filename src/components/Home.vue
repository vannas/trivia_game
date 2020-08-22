<template>
  <div class="container">
      <div class="row">
        <div class="card congrats light-green text-white" v-if="$route.name == 'fromgame'">
            <div class="card-title">
                Great game {{user.name}}!
            </div>
        </div>
        
        <div class="card amber join centered col offset-s5 offset-m5 s3 m3">
            <div class="card-title white-text">
                Join the game!
            </div>
            <div class="card-content">              
                <input type="submit" class="btn-floating btn-large red waves-effect waves-light" value="➤➤" @click="go_play">
            </div>
        </div>

        <div class="results">
            <table class="centered amber lighten-4 striped">
                <thead>
                    <tr class="red white-text">
                        <th>Name</th>
                        <th max="100">Percentage</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody v-for="result in results" :key="result.id">
                    <tr>
                        <td>{{result.player}}</td>
                        <td>{{result.percentage}}%</td>
                        <td>{{result.score}}/3</td>
                        <td class="dated">{{result.date}}</td>
                        
                    </tr>
                </tbody>
            </table>

        </div>
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
        results: db.collection('games').orderBy('date')
        }
    }
    
}
</script>

<style scoped>
.container{
    text-align:center;
    margin-bottom:100px;
}

.congrats{
    color:white;
}

.join{
    display:block;
    padding:10px;
    border-radius: 25px;
    margin:12px auto;
    margin-bottom: 2em;
}

table tr:nth-child(n+10) {
  display:none;
}

.dated{
    max-width: 1.5em;
}

.results {
    display:block;
    max-height: 1500px;
}

</style>