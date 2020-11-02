import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/todo';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldList) => [
      ...oldList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue('');
  };

  const onChange = useCallback(({ target: { value } }) => {
    setInputValue(value);
  }, []);

  return (
    <div>
      <input type="text" onChange={onChange} value={inputValue} />
      <button onClick={addItem}>ADD</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
