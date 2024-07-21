const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  const storageValue = localStorage.getItem(todoItem)
  if (!storageValue) {
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj)
  }
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems.splice(payload.index, 1)
}

const toggleOneItem = (state, payload) => {
    // v-bind로 todoItems를 내리고 그걸로 list에서 사용하기 떄문에 
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const learAllItem = (state) => {
    localStorage.clear()
    state.todoItems = []
}

export {addOneItem, removeOneItem, toggleOneItem, learAllItem}