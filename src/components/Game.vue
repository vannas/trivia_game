<template>
    <div class="container">
        <h1>Trivia Game</h1>
        <form @submit.prevent="new_game">
            
            <!---
            <div class="question">
                <form action="#" v-for="question in randomize_questions" :key="question.id">
                    <span>{{question.question}} </span>
                    <p>
                        <label>
                            <input name="radiosgroup1" type="radio" v-model="answer1"/> 
                            <span v-for="(answer, i) in randomize_answers" :key="i"> {{answer.text}} </span>
                        </label>
                    </p>
                </form>
            </div>
            --->           
            
            <div class="question1">
                <form action="#">
                    <span>{{questions[0].question}} </span>
                    <p>
                        <label for="radio-1A">
                            <input name="radiosgroup1" type="radio" value="radio-1" id="radio-1A" v-model="answer1"/> 
                            <span>{{questions[0].answers[0].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label for="radio-2A">
                            <input name="radiosgroup1" type="radio" value="radio-2" id="radio-2A" v-model="answer1"/>
                            <span>{{questions[0].answers[1].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label for="radio-3A">
                            <input name="radiosgroup1" type="radio" value="radio-3" id="radio-3A" v-model="answer1"/> 
                            <span>{{questions[0].answers[2].text}}</span>
                        </label>
                    </p>
                    <p>
                        <label for="radio-4A">
                            <input name="radiosgroup1" type="radio" value="radio-4" id="radio-4A" v-model="answer1"/> 
                            <span>{{questions[0].answers[3].text}}</span>
                        </label>
                    </p>
                </form>
            </div>

            <div class="question2">
                <form action="#">
                <span>{{questions[1].question}} </span>
                <p>
                    <label for="radio-1B">
                        <input name="radiosgroup2" type="radio" value="radio-1" id="radio-1B"/> 
                        <span>{{questions[1].answers[0].text}}</span>
                    </label>
                </p>
                <p>
                    <label for="radio-2B">
                        <input name="radiosgroup2" type="radio" value="radio-2" id="radio-2B"/>
                        <span>{{questions[1].answers[1].text}}</span>
                    </label>
                </p>
                <p>
                    <label for="radio-3B">
                        <input name="radiosgroup2" type="radio" value="radio-3" id="radio-3B"/> 
                        <span>{{questions[1].answers[2].text}}</span>
                    </label>
                </p>
                <p>
                    <label for="radio-4B">
                        <input name="radiosgroup2" type="radio" value="radio-4" id="radio-4B"/>
                        <span>{{questions[1].answers[3].text}}</span>
                    </label>
                </p>
                </form>
            </div>

            <div class="question3">
                <span>{{questions[2].question}} </span>

                <p>
                    <label for="radio-1C">
                        <input name="radiosgroup3" type="radio" value="radio-1" id="radio-1C"/>
                        <span>{{questions[2].answers[0].text}}</span>
                    </label>
                </p>
                <p>
                    <label for="radio-2C">
                        <input name="radiosgroup3" type="radio" value="radio-2" id="radio-2C"/>
                        <span>{{questions[2].answers[1].text}}</span>
                    </label>
                </p>
                <p>
                    <label for="radio-3C">
                        <input name="radiosgroup3" type="radio" value="radio-3" id="radio-3C"/> 
                        <span>{{questions[2].answers[2].text}}</span>                        
                    </label>
                </p>
                <p>
                    <label for="radio-4C">
                        <input name="radiosgroup3" type="radio" value="radio-4" id="radio-4C"/>
                        <span>{{questions[2].answers[3].text}}</span>
                    </label>                    
                </p>
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
//import router from "@/router";

export default {
    name: 'Game',
    data() {
    return {
      questions: [],
      answers: [],
      answer1: '',
      answer2: '',
      answer3: ''
    }
  },
  computed: {
      randomize_questions() {
          let questions= [...this.questions];
          questions.sort(() => 0.5 - Math.random());
          return questions;
      },

      /*randomize_answers() {
          let possible_answers= [...answers.text];
          possible_answers.sort(() => 0.5 - Math.random());
          return possible_answers;
      }*/
  },
  methods: {
    new_game() {        
        
        }
    },
  firestore() {
    return {
      questions: db.collection('trivia_vault'),
      games: db.collection('games')
    }
  },
  mounted() {
    
    }
}   

</script>

<style>

</style>