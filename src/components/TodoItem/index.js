// Write your code here

import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {title, id} = todo
  const deleteToo = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="to-do-container">
      <p className="todo">{title}</p>
      <button onClick={deleteToo} type="button" className="delete-button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
