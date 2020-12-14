const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

const add_todo = {
  type: ADD_TODO,
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false,
  },
};

const removeTodo = {
  type: REMOVE_TODO,
  id: 0,
};

const toggleTodo = {
  type: TOGGLE_TODO,
  id: 0,
};

const add_goal = {
  type: ADD_GOAL,
  goal: {
    id: 0,
    name: "Run a marthon",
  },
};

const removeGoal = {
  type: REMOVE_GOAL,
  id: 0,
};
// End of actions

// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    default:
      return state;
  }
}

function createStore() {
  // The store should have four parts
  // 1. the state
  // 2. Get the state
  // 3. Listen to changes on the state.
  // 4. Update the state

  // 1. the state
  let state;

  // 2. Get the state
  const getState = () => state;

  // 3. Listen to changes on the state.
  let listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);

    // Unsubscribe it from listeners
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return {
    getState,
    subscribe,
  };
}
