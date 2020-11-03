const { useRecoilState, useRecoilValue } = require('recoil');
const { todoListStatsState } = require('../store/todo');

function TodoListStats() {
  const {
    percentCompleted,
    totalCompletedNum,
    totalNum,
    totalUncompletedNum,
  } = useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStats;
