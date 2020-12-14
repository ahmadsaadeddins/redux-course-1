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
  id: 1,
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
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : // : { name: todo.name, id: todo.id, complete: !todo.complete }
            Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

function createStore(reducer) {
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

  // 4. Update the state
  const dispatch = (action) => {
    console.log(state);

    state = reducer(state, action);
    console.log(state);

    // Invoke subscribed functions we are saved in listeners
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() =>
  console.log("the new state is: ", store.getState())
);

store.dispatch(add_todo);
store.dispatch(add_goal);
