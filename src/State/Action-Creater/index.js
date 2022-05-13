export const DipositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "diposit",
      payrol: amount,
    });
  };
};
export const WithdrowMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdrow",
      payrol: amount,
    });
  };
};
