import { useSelector } from "react-redux";

export default function useTransactions() {
  const state = useSelector((state) => state.user);
  return state.user ? state.user.data.transActions : [];
}
