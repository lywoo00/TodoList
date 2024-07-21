<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplate({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fa-solid fa-trash"></i>
        </span>
        <!-- <button v-on:click="remove"></button> -->
      </li>
    </transition-group>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    // props: ['propsdata'],
    methods: {
      ...mapMutations({
        removeTodo: 'removeOneItem',
        toggleComplate: 'toggleOneItem'
      }),


      // removeTodo(todoItem, index) {
      //   this.$emit('removeTodoItem', todoItem, index)
      //   this.$store.commit('removeOneItem', { todoItem, index })
      // },

      // toggleComplate(todoItem, index) {
      //   this.$emit('toggleItem', todoItem, index)
      //   this.$store.commit('toggleOneItem', { todoItem, index })

      // }
    },
    computed: {
      // todoItems() {
      //   return this.$store.getters.storedTodoItems
      // }
      ...mapGetters(['storedTodoItems'])
      // ...mapGetters({
      //   todoitem: 'storedTodoItems'
      // })

    }

  }
</script>
<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    /* color: black; */
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    /* color: #62acde; */
    color: black;
  }

  .textCompleted {
    text-decoration: line-through;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  /* transition css */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.7s;
  }

  .list-enter-from,
  .list-leave-to

  /* .list-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateY(10px);
  }
</style>