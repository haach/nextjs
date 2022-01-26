/** @jsxImportSource @emotion/react */
import {FC, InputHTMLAttributes, useState} from 'react';

import type {NextPage} from 'next';

import {css} from '@emotion/react';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import {DotFilledIcon, CheckIcon, ChevronRightIcon} from '@radix-ui/react-icons';
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

const ContextMenu: FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('pedro');
  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger>
        <h3>Right click here.</h3>
      </ContextMenuPrimitive.Trigger>

      <ContextMenuPrimitive.Content
        sideOffset={5}
        css={css`
          padding: 20px;
          background-color: white;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
        `}
      >
        <ContextMenuPrimitive.Item css={item}>
          Back <RightSlot>⌘+[</RightSlot>
        </ContextMenuPrimitive.Item>
        <ContextMenuPrimitive.Item disabled css={item}>
          Foward <RightSlot>⌘+]</RightSlot>
        </ContextMenuPrimitive.Item>
        <ContextMenuPrimitive.Item css={item}>
          Reload <RightSlot>⌘+R</RightSlot>
        </ContextMenuPrimitive.Item>
        <ContextMenuPrimitive.Root>
          <ContextMenuPrimitive.TriggerItem>
            More Tools
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
          </ContextMenuPrimitive.TriggerItem>
          <ContextMenuPrimitive.Content sideOffset={2} alignOffset={-5}>
            <ContextMenuPrimitive.Item>
              Save Page As… <RightSlot>⌘+S</RightSlot>
            </ContextMenuPrimitive.Item>
            <ContextMenuPrimitive.Item>Create Shortcut…</ContextMenuPrimitive.Item>
            <ContextMenuPrimitive.Item>Name Window…</ContextMenuPrimitive.Item>
            <ContextMenuPrimitive.Separator />
            <ContextMenuPrimitive.Item css={item}>Developer Tools</ContextMenuPrimitive.Item>
          </ContextMenuPrimitive.Content>
        </ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Separator />
        <ContextMenuPrimitive.CheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
          <ContextMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </ContextMenuPrimitive.ItemIndicator>
          Show Bookmarks <RightSlot>⌘+B</RightSlot>
        </ContextMenuPrimitive.CheckboxItem>
        <ContextMenuPrimitive.CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
          <ContextMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </ContextMenuPrimitive.ItemIndicator>
          Show Full URLs
        </ContextMenuPrimitive.CheckboxItem>
        <ContextMenuPrimitive.Separator />
        <ContextMenuPrimitive.Label>People</ContextMenuPrimitive.Label>
        <ContextMenuPrimitive.RadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuPrimitive.RadioItem value="pedro">
            <ContextMenuPrimitive.ItemIndicator>
              <DotFilledIcon />
            </ContextMenuPrimitive.ItemIndicator>
            Pedro Duarte
          </ContextMenuPrimitive.RadioItem>
          <ContextMenuPrimitive.RadioItem value="colm">
            <ContextMenuPrimitive.ItemIndicator>
              <DotFilledIcon />
            </ContextMenuPrimitive.ItemIndicator>
            Colm Tuite
          </ContextMenuPrimitive.RadioItem>
        </ContextMenuPrimitive.RadioGroup>
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Root>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Try out the keyboard support</p>
      <Todo />
      <TextInput name="text1" placeholder="type text here" />
      <NumberInput name="number" placeholder="type number here" />
      <ContextMenu />
    </>
  );
};

export default Home;
