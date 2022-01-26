import type {NextPage} from 'next';
import {FC, useState} from 'react';
import {CheckIcon} from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';

interface TodoItem {
  id: string;
  label: string;
  done: boolean;
}

const Todo: FC = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([
    {
      id: 'figma',
      label: 'Get access to figma',
      done: false,
    },
    {
      id: 'expense',
      label: 'Expense lunch',
      done: false,
    },
    {
      id: 'pizza',
      label: 'Order pizza',
      done: false,
    },
  ]);
  return (
    <ol>
      {todos.map(({id, label, done}, idx) => (
        <li key={id}>
          <Checkbox.Root
            checked={done}
            onCheckedChange={(val: boolean) => {
              todos[idx] = {id, label, done: val};
              setTodos([...todos]);
            }}
          >
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
            {label}
          </Checkbox.Root>
        </li>
      ))}
    </ol>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <Todo />
    </>
  );
};

export default Home;
