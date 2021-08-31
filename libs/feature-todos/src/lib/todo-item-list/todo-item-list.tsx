import React from 'react';
import { useTestQuery } from '@todo-starter/data-access';

/* eslint-disable-next-line */
export interface TodoItemListProps {}

export function TodoItemList(props: TodoItemListProps) {
  const { loading, error, data } = useTestQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.findManyTodoItem.map(({ id, text, done }) => (
        <li key={id}>
          {text} - <strong>{done ? 'Done' : 'Not Done'}</strong>
        </li>
      ))}
    </ul>
  );
}

export default TodoItemList;
