<template>
    <div>
      <div class="modal fade" id="addShoppingList" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Shopping List</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="title">Shopping List Name</label>
                  <input type="text" class="form-control" required id="title" v-model="title">
                  <span v-show="isEmpty" class="alert alert-danger" id="error">Please fill the title!</span>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clodeModal" id="close">Close</button>
              <button type="button" class="btn btn-primary" @click="addShoppingList" id="addShopping">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'addShoppingList',
  data () {
    return {
      title: '',
      isEmpty: false
    }
  },
  methods: {
    ...mapActions(['createShoppingList']),
    addShoppingList () {

      if(this.title.trim().length === 0){
        this.isEmpty = true;
        return
      }

      let list = {
        title: this.title,
        items: []
      }

      this.createShoppingList(list)
      this.clodeModal();
    },
    clodeModal () {
      this.isEmpty = false;
      this.title = ''
      this.$JQuery('#addShoppingList').modal('hide')
    }
  }
}
</script>
