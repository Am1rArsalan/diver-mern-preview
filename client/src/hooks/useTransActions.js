import {  useEffect } from "react";
import { fetchTransActions } from "../store/action";
import { useSelector, useDispatch } from "react-redux";

export default function () {
  const state = useSelector((state) => state.transActions);
  const dispatch = useDispatch();
  //let loadTrancActions = dispatch(() => fetchTransActions()) ;
  useEffect(() => {
    dispatch(fetchTransActions());
   //loadTrancActions() ;
  }, []);
  return state;
}

