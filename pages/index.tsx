/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import * as Checkbox from '@radix-ui/react-checkbox';
import {CheckIcon} from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';
import type {NextPage} from 'next';
import {FC, InputHTMLAttributes, useState} from 'react';
import {csx} from '../utils/csx';

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
    <ol
      css={css`
        width: 100%;
        max-width: 400px;
      `}
    >
      {todos.map(({id, label, done}, idx) => (
        <li key={id}>
          <Checkbox.Root
            checked={done}
            onCheckedChange={(val: boolean) => {
              todos[idx] = {id, label, done: val};
              setTodos([...todos]);
            }}
            css={css`
              all: unset;
              height: 40px;
              display: flex;
              align-items: center;
              &:hover {
                font-weight: bolder;
              }
              &:focus {
                outline: 2px solid blue;
              }
              &:focus-visible {
                outline: 2px solid red;
              }
            `}
          >
            <label>{label}</label>
            <Checkbox.Indicator
              css={css`
                margin-left: 1rem;
              `}
            >
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </li>
      ))}
    </ol>
  );
};
type InputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInput: FC<InputProps> = (props) => {
  return <input type="text" {...props} />;
};
const NumberInput: FC<InputProps> = (props) => {
  return <input type="number" {...props} />;
};

const RightSlot = csx([
  css`
    margin-left: auto;
  `,
]);
const item = css`
  display: flex;
`;

const RadixDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger>Click me for a dialog!</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Dialog.Content
          css={css`
            background-color: white;
            padding: 20px 30px;
          `}
        >
          <Dialog.Title>Schöner Titel</Dialog.Title>
          <Dialog.Description>Description Lirum larum Löffelstiel</Dialog.Description>
          <Dialog.Close>
            {' '}
            <CheckIcon />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Try out the keyboard support</p>
      <Todo />
      <TextInput name="text1" placeholder="type text here" />
      <NumberInput name="number" placeholder="type number here" />
      <RadixDialog />
    </>
  );
};

export default Home;
