import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../State/index";

const Sop = () => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { WithdrowMoney, DipositMoney } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  return (
    <>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(ActionCreators.WithdrowMoney(100))}}>-</button>
    Add to Cart
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(ActionCreators.DipositMoney(100))}}>+</button> */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                WithdrowMoney(100);
              }}
            >
              -
            </button>
            <span className="bg-info text-white">
              Current Amount : {amount}
            </span>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                DipositMoney(100);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sop;
