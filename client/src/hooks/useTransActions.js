import { useSelector } from "react-redux";

export default function () {
  const state = useSelector((state) => state.user);
  return state.user ?  state.user.data.transActions :  [] ;
}

