<template id="change-title-template">
    <div>
        <em>Change the title of your shopping list here</em>
        <input :value="title" @input="onInput($event.target.value)" class="form-control" id="title"/>
        <span v-if="isEmpty">Please Fill the Title</span>
    </div>
</template>
<script>
export default {
    props: ['title', 'id'],

    data(){
        return {
            isEmpty: false
        }
    },

    methods: {
      onInput(title){

          if(title.trim().length === 0){
              this.isEmpty = true;
              return
          }

          this.isEmpty && (this.isEmpty = false)

          this.$store.dispatch('changeTitle', { title: title, id: this.id})
      }
    }
}
</script>
