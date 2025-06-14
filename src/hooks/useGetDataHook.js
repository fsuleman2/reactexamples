import { useDispatch } from "react-redux";
import { getFetchData } from "../slices/apiSlice";

function useGetDataHook() {
  const dispatch = useDispatch();

  const fetchData = ({ url }) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        dispatch(getFetchData(response));
      });
  };
  return { fetchData };
}
export default useGetDataHook;
