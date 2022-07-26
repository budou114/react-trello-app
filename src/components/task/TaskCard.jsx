import React, { Component } from 'react'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export default class TaskCard extends Component {
  render() {
    return (
      <div className='taskCard'>
        <TaskCardTitle />
        <TaskCardDeleteButton />
        <TaskAddInput />
        <Tasks />
      </div>
    )
  }
}
