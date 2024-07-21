const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr;
  }
}

const state = {
  todoItems: storage.fetch(),
  allCheck: false
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      item: todoItem
    };
    const storageValue = localStorage.getItem(todoItem)
    if (!storageValue) {
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj)
    }
  },

  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.index, 1)
  },

  toggleOneItem(state, payload) {
    // v-bind로 todoItems를 내리고 그걸로 list에서 사용하기 떄문에 
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    // let filter = state.todoItems.filter((item) => {
    //   item.completed == false
    // })


    console.log(state.todoItems[payload.index].completed);
  },

  clearAllItem(state) {
    localStorage.clear()
    state.todoItems = []
  },

  CheckAllItem(state) {
    const items = state.todoItems;
    items.forEach((item) => {
      item.completed = !state.allCheck
      localStorage.removeItem(item.item)
      localStorage.setItem(item.item, JSON.stringify(item))
    });
    state.allCheck = !state.allCheck

  }
}

export default {
  state,
  getters,
  mutations
}