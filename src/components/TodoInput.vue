<template lang="">
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer addBtn" v-on:click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>

    <IsModal v-if="showModal" @close="showModal = false">

      <template v-slot:header>경고!
        <i class="fas fa-times" @click="showModal = false"></i>
      </template>

      <template v-slot:body>
        아무것도 입력하지 않았습니다
      </template>

      <!-- <template v-slot:footer>
        이ㅏㅓ
        <button class="modal-default-button" v-on:click="showModal = false">
          OK
        </button>
      </template> -->
    </IsModal>


  </div>
</template>
<script>
  import IsModal from './common/IsModal.vue'

  export default {
    data() {
      return {
        newTodoItem: "",
        showModal: false
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== '') {
          // this.$emit('addTodoItem', this.newTodoItem)
          this.$store.commit('addOneItem', this.newTodoItem)
          this.clearinput();
        } else {
          this.showModal = !this.showModal
        }
      },
      clearinput() {
        this.newTodoItem = '';
      }
    },
    components: {
      IsModal
    }
  }
</script>
<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>