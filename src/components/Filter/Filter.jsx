import { useDispatch } from "react-redux";
import { Conteiner, Input } from "./Filter.styled";
import { setFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch()
  
  const onChange = (e) => {
  
    dispatch(setFilter(e.target.value))
  }


  return (
    <Conteiner>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onChange}
      />
    </Conteiner>
  );
};
