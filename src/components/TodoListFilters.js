import React from 'react';
import { useRecoilState } from 'recoil';
import { todoFilterListState } from '../store/todo';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterListState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter :
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">ALL</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
