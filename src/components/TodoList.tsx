import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
                <input type="checkbox" checked={ todo.completed } />
                <span className="todo__text">{ todo.title }</span>
                <i className="todo__icon material-icons red-text">delete</i>
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}
