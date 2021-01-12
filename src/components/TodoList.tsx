import { ITodo } from "./interfaces";
import React from "react";

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (!todos.length) {
    return <p className="center">Пока дел нет</p>
  }

  const removehandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {
        todos.map(todo => {
          const classes = ['todo']

          if (todo.completed) {
            classes.push('completed')
          }

          return (
            <li key={ todo.id } className={ classes.join(' ') }>
              <label className="todo__label">
                <input
                  type="checkbox"
                  checked={ todo.completed }
                  onChange={ onToggle.bind(null, todo.id) }
                />
                <span className="todo__text">{ todo.title }</span>
                <i
                  className="todo__icon material-icons red-text"
                  onClick={ event => removehandler(event, todo.id) }
                >delete</i>
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}
