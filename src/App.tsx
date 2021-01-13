import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './components/interfaces';

declare var confirm: (question: string) => boolean

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    }

    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      const td = {...todo}

      if (td.id === id) {
        td.completed = !td.completed
      }

      return td
    }))
  }

  const removeHandler = (id: number) => {
    // const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
    const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?')

    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return <>
    <Navbar />
    <div className="container">
      <TodoForm onAdd={ addHandler } />
      <TodoList
        todos={ todos }
        onToggle={ toggleHandler }
        onRemove={ removeHandler }
      />
    </div>
  </>
}

export default App;
