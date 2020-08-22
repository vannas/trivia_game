<template>
    <div class="formulario row">
        <div class="col offset-s2 offset-m2 s8 m8">
            <h5>New Question</h5>
            <!--Creo un formulario para ingresar nuevos datos a la tabla y vinculo con v-bind @ al metodo----->
            <form @submit.prevent="addnewquestion" id="form_questions">
                <!--//cada campo de input debe vincularse con un v-model amarrado a un elemento en el data() del componente-->
                <div class="input-field">
                <label for="new_question" class="active">Question</label>
                <textarea id="new_question" class="validate materialize-textarea" placeholder="Create a general knowledge question." minlength="15" rows="8" v-model="new_question" required="required"> </textarea>
                </div>

                <div class="options">            
                    <div class="input-field">
                        <label for="answer1" class="active">Correct Answer</label>
                        <input id="answer1" type="text" required="required" class="validate" v-model="correct">
                    </div>

                    <div class="input-field">
                        <label for="answer2" class="active">Fake Answer</label>
                        <input id="answer2" type="text" required="required" class="validate" v-model="fake1">
                    </div>

                    <div class="input-field">
                        <label for="answer3" class="active">Fake Answer 2</label>
                        <input id="answer3" type="text" required="required" class="validate" v-model="fake2">
                    </div>
                    
                    <div class="input-field">
                        <label for="answer4" class="active">Fake Answer 3</label>
                        <input id="answer4" type="text" required="required" class="validate" v-model="fake3">
                    </div>
                </div>

                <div class="input-field">
                <input type="submit" class="btn" value="Enter">
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase';  
import router from "@/router";
import M from "materialize-css";

export default {
    name: 'Questions',
    data() {
    return {
      new_question: '',
      correct: '',
      fake1: '',
      fake2: '',
      fake3: ''
    }
  },
  user() {
    if (this.$store.state.user == 'null'){
        router.push('/login');
    }
    return this.$store.state.user;
    },
  methods: {
      addnewquestion() {
        let answers_randomized= [
            {text: this.correct, correct: true},
            {text: this.fake1, correct: false},
            {text: this.fake2, correct: false},
            {text: this.fake3, correct: false}
        ];
        answers_randomized = answers_randomized.sort(() => 0.5 - Math.random())

        db.collection('trivia_vault').add({
            question: this.new_question,
            answers: answers_randomized
        })
        .then(() =>  {
                M.toast({html: `Question added to the game. Thank you!`, classes: `rounded light-green`})
                router.push('/')
        })
        this.new_question = '';
        this.correct = '';
        this.fake1 = '';
        this.fake2 = '';
        this.fake3 = '';
    }
  },
  firestore() {
    return {
      trivias: db.collection('trivia_vault')
    }
  },
  mounted() {
      //algo al inicio
    }
}
</script>

<style>

</style>