import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/todo';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default TodoList;
