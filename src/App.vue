<template lang="">
  <div id="app">
    <TodoHeader></TodoHeader>
    <CountList></CountList>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>
<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import CountList from './components/CountList.vue'


  export default {
    /*
    data() {
      return {
        todoItems: []
      }
    },
    */
    /*
    methods: {
      addOneitem(todoItem) {
        const obj = { completed: false, item: todoItem };
        const storageValue = localStorage.getItem(todoItem)
        if (!storageValue) {
          localStorage.setItem(todoItem, JSON.stringify(obj));
          this.$store.state.todoItems.push(obj)
        }
      },
      removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item)
        this.todoItems.splice(index, 1)
      },
      toggleOneItem(todoItem, index) {
        this.todoItems[index].completed = !this.todoItems[index].completed
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItem() {
        localStorage.clear()
        this.todoItems = []
      }
    },
    */

    components: {
      TodoHeader,
      CountList,
      TodoInput,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>