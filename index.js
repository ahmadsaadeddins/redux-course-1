function createStore() {
  // The store should have four parts
  // 1. the state
  // 2. Get the state
  // 3. Listen to changes on the state.
  // 4. Update the state
  let state;
  let listeners = [];

  const getState = () => state;

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
