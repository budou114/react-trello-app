import React, { useState } from 'react';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);
  return (
    <div className='taskCardsArea'>
      {taskCardsList.map(taskCardList => (
        <TaskCard />
      ))}

      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
