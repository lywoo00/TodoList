<template lang="">
  <div class="btnWrap">
    <div class="clearAllContainer">
      <span class="clearAllBtn shadow" v-on:click="clearTodo">Clear All</span>
    </div>
    <div class="checkAllContainer">
      <span class="checkAllBtn shadow" v-on:click="CheckAllItem">Check All</span>
    </div>
  </div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex'


  export default {

    methods: {
      ...mapMutations({
        clearTodo: 'clearAllItem',
        CheckAllItem: 'CheckAllItem'
      })

      // clearTodo() {
      //   this.$emit('clearAll')
      //   this.$store.commit('clearAllItem')

      // }
    },
    computed: {
      ...mapGetters(['storedTodoItems'])
    }
  }
</script>
<style scoped>
  .btnWrap {
    display: flex;
    justify-self: center;
  }

  .clearAllContainer,
  .checkAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }

  .checkAllBtn {
    color: #62acde;
    display: block;
  }
</style>