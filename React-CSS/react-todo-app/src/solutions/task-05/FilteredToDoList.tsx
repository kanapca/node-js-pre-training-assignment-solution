import React, { useState } from 'react';
import { Todo } from '../../types';

/**
 * Task 5: FilteredToDoList Component
 * 
 * Theory: Derived State and Computed Values
 * 
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 * 
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 * 
 * Common Derived State Patterns:
 * 
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 * 
 * Searching:
 * - const filteredTodos = todos.filter(todo => 
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 * 
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 * 
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 * 
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 * 
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */
export const FilteredToDoList: React.FC = () => {
  const [input, setValue] = useState('');
  const [todos, updateTodos] = useState<Todo[]>([]);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const filterTodos = todos.filter(todo => {
    if(filter === 'active') return !todo.completed;
    if(filter === 'completed') return todo.completed;
    return true
  })

  const markCompleted = (id: number) => {
    updateTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: true} : todo
    ))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(input.trim() === '') {
      return;
    }

    const newId = todos.length;
    const newTodo: Todo = {
      title: input,
      id: newId,
      completed: false
    }

    updateTodos([...todos, newTodo]);
    setValue('');
  }
  // TODO: Implement the FilteredToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add filter buttons: "All", "Active", "Completed"
  // 3. Filter todos based on selected filter
  // 4. Use derived state for filtered results
  // 5. Add complete functionality for todos
  // 
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  // 
  // const filteredTodos = todos.filter(todo => {
  //   if (filter === 'active') return !todo.completed;
  //   if (filter === 'completed') return todo.completed;
  //   return true; // 'all' case
  // });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={input}
          onChange={event => setValue(event.target.value)}
          placeholder="add todo">
        </input>

        <button type='submit'>Add todo</button>
      </form>
      {todos.map(todo => (
        <p key={todo.id}>
          {todo.id} - {todo.title} - {todo.completed ? "completed": "in progress"}
          <button onClick={() => markCompleted(todo.id)}>
            {todo.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
        </p>
      ))}

      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Completed
      </button>

      {filterTodos.map(todo => (
        <p key = {todo.id}>
          {todo.id} - {todo.title} - {todo.completed ? "completed": "in progress"}
        </p>
      ))}


    </div>
  );
}; 