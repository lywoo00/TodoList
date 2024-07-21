<template lang="">
  <div>
    <div class="count-wrap">
      개수: <span>{{this.storedTodoItems.length}}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['storedTodoItems'])

    }
  }
</script>
<style scoped>
  .count-wrap {
    text-align: left;
  }
</style>