<template>
    <div class="container">
        <h1>Trivia Game</h1>
        <form @submit.prevent="new_game">
            
            <div class="question">
                <div v-for="(question, i) in randomize_questions.slice(0,3)" :key="question.id">
                    <span>{{question.question}} </span>
                    <p>
                        <label>
                            <input :name="question.id" type="radio" :value="question.answers[0].correct ? 'OK' :'NO'" v-model="form.answers[i]" required="required"/> 
                            <span>{{question.answers[0].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input :name="question.id" type="radio" :value="question.answers[1].correct ? 'OK' :'NO'" v-model="form.answers[i]" required="required"/>
                            <span>{{question.answers[1].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input :name="question.id" type="radio" :value="question.answers[2].correct ? 'OK' :'NO'" v-model="form.answers[i]" required="required"/> 
                            <span>{{question.answers[2].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input :name="question.id" type="radio" :value="question.answers[3].correct ? 'OK' :'NO'" v-model="form.answers[i]" required="required"/> 
                            <span>{{question.answers[3].text}}</span>
                        </label>
                    </p>
                </div>
            </div>
       
        <div class="input-field">
          <input type="submit" class="btn red" value="Play">
        </div>
        
        </form>
    </div>
</template>

<script>
import { db } from '@/firebase'
import 'firebase/auth';
import firebase from 'firebase/app'
import router from "@/router";
import M from "materialize-css";

export default {
    name: 'Game',
    data() {
    return {
      questions: [],
      form: {
          answers: []
      }
    }
  },
  computed: {
    user() {
        return this.$store.state.user;
    },
    randomize_questions() {
        let questions= [...this.questions];
        questions.sort(() => 0.5 - Math.random());
        return questions;
    },
  },
    methods: {
        new_game() {   
            var user = firebase.auth().currentUser;     
            let score = 0;
            let percentage = 0;

            if(this.form.answers[0] == 'OK'){ 
                score++
            }
            if(this.form.answers[1]== 'OK'){
                score++
            }
            if(this.form.answers[2]== 'OK'){
                score++
            }

            percentage = (score / 3) * 100
            percentage = percentage.toFixed(1)

            let date= new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
            const currentDate = date.toLocaleDateString("es-CL", options);

            db.collection('games').add({
                player:user.displayName,
                percentage: `${percentage}`,
                score: score,
                date: currentDate
            })
            .then(() =>  {
                M.toast({html: `Acertaste ${score} de 3`, classes: `rounded light-green`})
                router.push('/fromgame')
            })    
        }
    },
    firestore() {
        return {
            questions: db.collection('trivia_vault'),
            games: db.collection('games')
        }
    }
}   

</script>

<style scoped>

.btn {
    margin-bottom:50px;
}

</style>