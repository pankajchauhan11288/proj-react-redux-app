const reducer = (state = 0, action) => {
  if (action.type === "diposit") {
    return state + action.payrol;
  } else if (action.type === "withdrow") {
    return state - action.payrol;
  } else {
    return state;
  }
};

export default reducer;
