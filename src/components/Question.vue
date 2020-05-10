<template>
    <div>
        <div v-if="! editing">
            <h1 v-text="question.title"></h1>
            <p v-text="question.body"></p>
            <button id="edit" @click="editing = true">Edit</button>
        </div>
        <div v-if="editing">
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" v-model="form.body"></textarea>
            <button @click="update" id="update">update</button>
            <button @click="cancel" id="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props:['dataQuestion'],
        data () {
            return {
                editing: false,
                question: this.dataQuestion,
                form: {
                    title: this.dataQuestion.title,
                    body: this.dataQuestion.body
                }
            }
        },

        methods: {
            cancel(){
                this.editing = false
            },
            update(){
                this.editing = false
                this.question = this.form
            }
        }

    }
</script>
