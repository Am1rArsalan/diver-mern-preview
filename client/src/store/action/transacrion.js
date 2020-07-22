import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_SUCCESS } from "./actionTypes";

export const fetchTransActions = () => {
   return {
      type : FETCH_TRANSACTIONS
   }
}

//export const fetchTransActionsSuccess = () => {
  //return (dispatch) => {
    //dispatch({ type: FETCH_TRANSACTIONS_SUCCESS});
  //};
//};
